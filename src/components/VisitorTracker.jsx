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

          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem('visitorTracked', 'true');
            console.log('Visitor tracked:', data.location);
          }
        } catch (error) {
          // Fail silently - don't interrupt user experience
          console.log('Visitor tracking unavailable:', error.message);
        }
      };

      // Track after a short delay to not interfere with initial page load
      const timeout = setTimeout(trackVisitor, 2000);
      
      return () => clearTimeout(timeout);
    }
  }, []);

  // This component doesn't render anything
  return null;
}

