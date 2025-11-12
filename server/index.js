import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try loading environment variables from multiple locations
console.log('Current directory:', __dirname);
dotenv.config();  // Try default .env
dotenv.config({ path: path.join(__dirname, '../.env') });  // Try root .env
dotenv.config({ path: path.join(__dirname, '../.env.local') });  // Try root .env.local

// Debug: Log environment variables
console.log('Environment check:', {
  GMAIL_USER: process.env.GMAIL_USER ? 'Set' : 'Not set',
  GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set'
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // If environment variables are not set, use hardcoded values temporarily
  const emailUser = process.env.GMAIL_USER || 'gabbyesquibel1999@gmail.com';
  const emailPass = process.env.GMAIL_APP_PASSWORD || 'okjmbfvggyfozyxf';

  console.log('Using credentials:', {
    user: emailUser,
    passLength: emailPass?.length || 0
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  try {
    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
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
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    res.status(500).json({ 
      message: 'Error sending email',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 