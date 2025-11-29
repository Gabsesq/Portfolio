import { useEffect } from 'react';

/**
 * VisitorTracker component
 * Automatically tracks visitor location (city/state) when they visit the site
 * This component runs silently in the background
 */
export default function VisitorTracker() {
  useEffect(() => {
    // Only track once per session
    const hasTracked = sessionStorage.getItem('visitorTracked');
    
    if (!hasTracked) {
      // Small delay to ensure page is loaded
      const trackVisitor = async () => {
        try {
          // Determine the API endpoint based on environment
          // In local dev, always try Express server first (saves to JSON file)
          // In production on Vercel, use /api/track-visitor
          const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
          
          // Always use Express server when on localhost (saves to file)
          const apiUrl = isLocalhost
            ? 'http://localhost:3001/api/track-visitor'
            : '/api/track-visitor';

          console.log('🔍 Attempting to track visitor at:', apiUrl);
          console.log('🌐 Hostname:', window.location.hostname);
          
          if (isLocalhost) {
            console.log('💡 Using Express server - data will save to server/visitors.json');
          }

          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('visitorTracked', 'true');
            console.log('✅ Visitor tracked:', data.location || data.message);
            if (isLocalhost) {
              console.log('💾 Data saved to server/visitors.json');
            }
          } else {
            const errorData = await response.text();
            console.error('❌ Tracking failed:', response.status, errorData);
            if (isLocalhost) {
              console.error('💡 Make sure Express server is running: npm run server');
            }
          }
        } catch (error) {
          // Log error so we can debug
          console.error('❌ Visitor tracking error:', error.message);
          const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
          if (isLocalhost) {
            console.error('💡 Make sure the Express server is running: npm run server');
            console.error('💡 Server should be on: http://localhost:3001');
          } else {
            console.error('💡 Check browser console for CORS/network errors');
          }
        }
      };

      // Track after a short delay to not interfere with initial page load
      const timeout = setTimeout(trackVisitor, 2000);
      
      return () => clearTimeout(timeout);
    } else {
      console.log('ℹ️ Visitor already tracked this session');
    }
  }, []);

  // This component doesn't render anything
  return null;
}

