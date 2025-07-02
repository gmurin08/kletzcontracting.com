# Conversion Tracking Setup Guide

## Production Checklist

- [ ] Add environment variables to production environment
- [ ] Update Privacy Policy to mention conversion tracking
- [ ] Test in production after deployment
- [ ] Mark "generate_lead" as conversion in GA4 Admin
- [ ] Set up conversion tracking in Meta Ads Manager

## Environment Variables Required

Add these to your `.env.local` file:

### Meta (Facebook) Conversions API
```
# Meta Pixel ID (from Facebook Events Manager)
META_PIXEL_ID=1439900253827320

# Meta Access Token (generate from Facebook Events Manager)
META_ACCESS_TOKEN=your_access_token_here

# Optional: Test Event Code (for testing in Events Manager)
META_TEST_EVENT_CODE=TEST12345
```

### Google Analytics 4
```
# GA4 Measurement ID (from Google Analytics)
GA_MEASUREMENT_ID=G-XXXXXXXXXX

# GA4 API Secret (create in GA4 Admin > Data Streams > Measurement Protocol API secrets)
GA_API_SECRET=your_api_secret_here
```

## How to Get These Values

### Meta Access Token
1. Go to Facebook Events Manager
2. Select your pixel (1439900253827320)
3. Go to Settings > Conversions API
4. Generate Access Token

### Google Analytics API Secret
1. Go to Google Analytics
2. Admin > Data Streams > select your stream
3. Measurement Protocol API secrets
4. Create new secret

## Testing

### Meta Events Manager
1. Use Test Events tool in Events Manager
2. Add `META_TEST_EVENT_CODE` to see test events
3. Submit form and check Test Events tab

### Google Analytics
1. Go to Realtime reports
2. Submit form
3. Check Events report for 'generate_lead' event

## Privacy Compliance

The implementation is privacy-compliant:
- No PII is sent to Meta or Google Analytics
- Only anonymous identifiers and conversion data are tracked
- All tracking happens server-side for better reliability
- Update your Privacy Policy to mention conversion tracking

## What Gets Tracked

### Meta Conversions API
- Lead event with $100 value
- Client IP and user agent for attribution
- Facebook click/browser IDs if available
- No names, emails, or phone numbers

### Google Analytics 4
- generate_lead event with $100 value
- Anonymous client ID
- Form metadata (form_id, form_name)
- Country/state (no PII)