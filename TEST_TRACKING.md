# Quick Test Guide

## Step-by-Step Test

1. **Make sure Express server is running:**
   ```bash
   npm run server
   ```
   You should see: `Server running on port 3001`

2. **Open your site in an incognito window** (or clear sessionStorage):
   - Visit your portfolio site
   - Open browser console (F12)
   - Look for: `🔍 Attempting to track visitor at: http://localhost:3001/api/track-visitor`

3. **Check for success message:**
   - Should see: `✅ Visitor tracked: [City], [State]`

4. **Check server terminal:**
   - Should see: `📊 Visitor tracking request received`
   - Should see: `✅ Visitor saved: ...`

5. **Verify data was saved:**
   - Visit: `http://localhost:3001/api/visitors`
   - Should see your visit in the JSON

## Common Issues

**If you see "Visitor already tracked":**
- Clear sessionStorage: `sessionStorage.removeItem('visitorTracked')`
- Or use incognito window

**If you see "Visitor tracking error":**
- Check that Express server is running
- Check for CORS errors in console
- Check network tab in browser dev tools

**If nothing happens:**
- Check browser console for errors
- Check server terminal for errors
- Make sure both servers are running (Express + Vite dev server)

