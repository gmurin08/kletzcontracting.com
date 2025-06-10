// /pages/api/update-opportunity.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
    const { opportunityId, action, token } = req.body;
  
    // Simple security: Verify the token (stored in env vars)
    if (token !== process.env.GHL_UPDATE_TOKEN) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Map action to stage ID and status
    let stageId, status, title;
    switch (action) {
      case 'book':
        stageId = process.env.GHL_BOOKED_STAGE_ID;
        status = 'open';
        title = 'Estimate Booked';
        break;
      case 'close':
        stageId = process.env.GHL_CLOSED_STAGE_ID;
        status = 'won';
        title = 'Sale Closed';
        break;
      case 'complete':
        stageId = process.env.GHL_COMPLETED_STAGE_ID;
        status = 'won';
        title = 'Job Completed';
        break;
      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  
    try {
      // Update the opportunity
      const response = await fetch(`https://services.leadconnectorhq.com/opportunities/${opportunityId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "stageId": stageId,
          "status": status,
          "title": title
        }),
      });
  
      if (!response.ok) {
        const error = await response.text();
        console.log('GHL Update Error:', error);
        return res.status(500).json({ error });
      }
  
      const data = await response.json();
      
      // Redirect to a thank you page
      res.redirect(307, '/opportunity-updated?status=' + action);
      
    } catch (err) {
      console.log('Server Error:', err);
      res.status(500).json({ error: err.message });
    }
  }