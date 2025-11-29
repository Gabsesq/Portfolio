# Visitor Tracking Setup Guide

This portfolio now tracks visitor locations (city/state) automatically when someone visits your site.

## What Data is Collected

- **City & State** (from IP geolocation)
- **Country**
- **Timestamp** (when they visited)
- **IP Address** (anonymized/stored for location lookup only)
- **ISP** (Internet Service Provider)
- **Browser/Device Info** (User Agent)
- **Language** preference
- **Referrer** (where they came from)

## How It Works

The tracking happens automatically in the background:
1. When a visitor loads your site, the `VisitorTracker` component runs
2. It sends their IP address to the tracking endpoint
3. The server uses IP geolocation (free service: ip-api.com) to get their city/state
4. The data is stored locally (development) or via your configured storage (production)

## Viewing Visitor Data

### Option 1: View in Local Development (Express Server)

If you're running the Express server locally (`npm run server`), visitor data is stored in:
```
Portfolio/server/visitors.json
```

You can view it by:
1. Opening `server/visitors.json` in your editor
2. OR visiting: `http://localhost:3001/api/visitors` in your browser

### Option 2: View Vercel Logs (Production - Temporary)

For production on Vercel, visitor data is currently logged to the console. To view:

1. Go to your Vercel dashboard
2. Navigate to your project → "Deployments" → Latest deployment → "Functions" tab
3. Click on `/api/track-visitor` function
4. View the "Logs" tab to see tracked visitors

**Note:** This is not ideal for viewing data. See Option 3 for a better solution.

### Option 3: Set Up Proper Storage (Recommended for Production)

Since Vercel serverless functions are stateless, you need external storage. Here are free options:

#### Option A: Use Google Sheets (Easiest)

1. Create a Google Sheet
2. Set up a Google Apps Script webhook
3. Add the webhook URL to Vercel environment variables as `VISITOR_WEBHOOK_URL`
4. Visitors will automatically be added to your sheet

#### Option B: Use Airtable (Free Tier)

1. Create an Airtable base with a "Visitors" table
2. Set up a Zapier/Make.com automation
3. Configure it to add rows when webhook is triggered
4. Add webhook URL to Vercel env variables

#### Option C: Use Supabase (Free Database)

1. Create a free Supabase project
2. Create a `visitors` table
3. Update `/api/track-visitor.js` to insert into Supabase
4. Create a simple admin page to view data

#### Option D: Use Vercel KV (Redis - Paid but Simple)

1. Enable Vercel KV in your project
2. Update the tracking endpoint to use KV storage
3. Create admin endpoint to retrieve and display data

### Option 4: Create an Admin Dashboard

I can create a simple admin page for you that displays all visitor data. Would you like me to:
- Create a password-protected admin page?
- Set up a specific storage solution?
- Build a dashboard to visualize visitor locations on a map?

## Privacy & Legal Considerations

⚠️ **Important**: 

1. **IP Address Collection**: You're collecting IP addresses for geolocation. This may be considered PII in some jurisdictions.
2. **GDPR/CCPA Compliance**: If you have EU or California visitors, you may need:
   - A privacy policy mentioning data collection
   - Cookie consent (if using cookies)
   - Option to opt-out

3. **Recommendations**:
   - Add a privacy policy link to your site
   - Consider showing a brief notice about analytics/tracking
   - Don't store IPs long-term (current setup keeps last 1000 visits)

## Email Addresses - Not Possible

❌ **You cannot collect email addresses without user input** due to:
- Privacy laws (GDPR, CCPA)
- Technical limitations (email addresses are not publicly available)
- Anti-spam regulations

Third-party services like Clearbit or Leadfeeder can sometimes identify **company domains** from IPs (B2B only), but:
- They only work for business visitors
- They're expensive ($100+/month)
- They don't provide individual emails
- Match rates are low (~30%)

## Current Configuration

- **Local Dev**: Uses Express server at `http://localhost:3001/api/track-visitor`
- **Production**: Uses Vercel serverless function at `/api/track-visitor`
- **Storage**: Local JSON file (dev) or console logs (prod - needs upgrade)

## Next Steps

1. **For Development**: Just run `npm run server` and check `server/visitors.json`

2. **For Production**: Choose a storage solution from Option 3 above, or ask me to set one up for you

3. **To View Data**: Let me know what storage solution you prefer, and I can create an admin dashboard

## Troubleshooting

- **Not tracking?** Check browser console for errors
- **Wrong location?** IP geolocation is approximate (usually city-level accuracy)
- **Missing data?** Check that the tracking endpoint is accessible

Need help setting up storage or creating an admin dashboard? Just ask!

