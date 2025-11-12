import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Validate request body
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields: name, email, and message are required' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check for required environment variables
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error('Missing environment variables:', {
      GMAIL_USER: !!gmailUser,
      GMAIL_APP_PASSWORD: !!gmailAppPassword
    });
    return res.status(500).json({ 
      message: 'Server configuration error: Email service not configured',
      details: 'Please contact the site administrator'
    });
  }

  // Create transporter with better error handling
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });

    // Verify transporter configuration
    await transporter.verify();
  } catch (error) {
    console.error('Transporter configuration error:', {
      message: error.message,
      code: error.code
    });
    return res.status(500).json({ 
      message: 'Email service configuration error',
      details: 'Unable to connect to email service'
    });
  }

  // Send email
  try {
    await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    
    // Provide more specific error messages
    let errorMessage = 'Error sending email';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check email credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection error. Please try again later.';
    } else if (error.response) {
      errorMessage = `Email service error: ${error.response}`;
    }

    res.status(500).json({ 
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
} 