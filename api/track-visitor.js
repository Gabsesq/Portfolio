// Vercel serverless function for tracking visitors
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get client IP address
    const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || 
                     req.headers['x-real-ip'] || 
                     req.headers['x-client-ip'] ||
                     req.connection?.remoteAddress || 
                     'unknown';

    // Helper function to get geolocation from IP
    async function getLocationFromIP(ip) {
      // Skip if IP is localhost or unknown
      if (!ip || ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('::1') || ip.startsWith('192.168.') || ip.startsWith('10.')) {
        return { city: 'Local', region: 'Development', country: 'Local' };
      }

      try {
        // Using free ip-api.com service (no API key required, rate limit: 45 requests/minute)
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

    // Get location data
    const locationData = await getLocationFromIP(clientIP);
    const timestamp = new Date().toISOString();
    
    // Build visitor data object
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

    // STORAGE OPTIONS:
    // Option 1: Send to external webhook (recommended for simple setup)
    // You can set up a free Zapier/Make.com webhook or use a service like n8n
    const webhookUrl = process.env.VISITOR_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(visitorData)
        });
      } catch (error) {
        console.error('Webhook error:', error);
      }
    }

    // Option 2: Store in database (if you set up MongoDB, Supabase, etc.)
    // You can add database storage here using environment variables

    // Option 3: Log to console (will show in Vercel logs)
    console.log('Visitor tracked:', JSON.stringify(visitorData, null, 2));

    // For now, we'll just return success
    // In production, you'd want to actually store this data
    return res.status(200).json({ 
      success: true, 
      message: 'Visitor tracked successfully',
      location: `${visitorData.city}, ${visitorData.state}`
    });

  } catch (error) {
    console.error('Error tracking visitor:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error tracking visitor',
      details: error.message 
    });
  }
}

