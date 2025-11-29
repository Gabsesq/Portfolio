import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs/promises';

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

// Helper function to get client IP address
const getClientIP = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection?.remoteAddress || 
         req.socket?.remoteAddress ||
         'unknown';
};

// Helper function to get geolocation from IP
async function getLocationFromIP(ip) {
  // Skip if IP is localhost or unknown
  if (!ip || ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('::1') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    return { city: 'Local', region: 'Development', country: 'Local' };
  }

  try {
    // Using free ip-api.com service (no API key required for basic usage)
    // Alternative: ipapi.co, ipstack.com (require free API keys)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,lat,lon,isp,query`);
    const data = await response.json();
    
    if (data.status === 'success') {
      return {
        city: data.city || 'Unknown',
        region: data.regionName || 'Unknown',
        country: data.country || 'Unknown',
        latitude: data.lat || null,
        longitude: data.lon || null,
        isp: data.isp || 'Unknown',
        ip: data.query || ip
      };
    } else {
      return { city: 'Unknown', region: 'Unknown', country: 'Unknown', ip };
    }
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return { city: 'Unknown', region: 'Unknown', country: 'Unknown', ip };
  }
}

// Visitor tracking endpoint
app.post('/api/track-visitor', async (req, res) => {
  try {
    console.log('📊 Visitor tracking request received');
    const clientIP = getClientIP(req);
    console.log('📍 Client IP:', clientIP);
    const locationData = await getLocationFromIP(clientIP);
    console.log('🌍 Location data:', locationData);
    const timestamp = new Date().toISOString();
    
    // Get additional metadata from request
    const visitorData = {
      timestamp,
      ip: locationData.ip || clientIP,
      city: locationData.city,
      state: locationData.region,
      country: locationData.country,
      latitude: locationData.latitude,
      longitude: locationData.longitude,
      isp: locationData.isp,
      userAgent: req.headers['user-agent'] || 'Unknown',
      referer: req.headers['referer'] || 'Direct',
      language: req.headers['accept-language']?.split(',')[0] || 'Unknown'
    };

    // Read existing visitors
    const visitorsFile = path.join(__dirname, 'visitors.json');
    let visitors = [];
    
    try {
      const data = await fs.readFile(visitorsFile, 'utf-8');
      visitors = JSON.parse(data);
    } catch (error) {
      // File doesn't exist or is invalid, start fresh
      visitors = [];
    }

    // Add new visitor
    visitors.push(visitorData);

    // Keep only last 1000 visitors to prevent file from getting too large
    if (visitors.length > 1000) {
      visitors = visitors.slice(-1000);
    }

    // Save to file
    await fs.writeFile(visitorsFile, JSON.stringify(visitors, null, 2));
    
    console.log('✅ Visitor saved:', `${visitorData.city}, ${visitorData.state}`);

    res.status(200).json({ 
      success: true, 
      message: 'Visitor tracked successfully',
      location: `${visitorData.city}, ${visitorData.state}`
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error tracking visitor',
      details: error.message 
    });
  }
});

// Endpoint to view visitor data (you can add authentication here)
app.get('/api/visitors', async (req, res) => {
  try {
    const visitorsFile = path.join(__dirname, 'visitors.json');
    const data = await fs.readFile(visitorsFile, 'utf-8');
    const visitors = JSON.parse(data);
    
    res.status(200).json({
      success: true,
      count: visitors.length,
      visitors: visitors.reverse() // Most recent first
    });
  } catch (error) {
    console.error('Error reading visitors:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error reading visitor data',
      details: error.message 
    });
  }
});

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