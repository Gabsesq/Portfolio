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
          // In production on Vercel, use /api/track-visitor
          // In local dev, use the Express server endpoint
          const isDev = import.meta.env.DEV;
          const apiUrl = isDev 
            ? 'http://localhost:3001/api/track-visitor'
            : '/api/track-visitor';

          console.log('🔍 Attempting to track visitor at:', apiUrl);

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
          } else {
            const errorData = await response.text();
            console.error('❌ Tracking failed:', response.status, errorData);
          }
        } catch (error) {
          // Log error so we can debug
          console.error('❌ Visitor tracking error:', error.message);
          console.log('💡 Make sure the Express server is running: npm run server');
          console.log('💡 Or check browser console for CORS/network errors');
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

