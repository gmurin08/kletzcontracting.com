export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const measurementId = process.env.GA4_MEASUREMENT_ID;
    const apiSecret = process.env.GA4_API_SECRET;

    if (!measurementId || !apiSecret) {
      return res.status(500).json({ 
        error: 'GA4 configuration missing',
        details: 'GA4_MEASUREMENT_ID or GA4_API_SECRET not configured' 
      });
    }

    // Generate a client ID (or use one from the request if provided)
    const clientId = req.body.clientId || `${Date.now()}.${Math.random().toString(36).substring(2, 15)}`;

    // Prepare the GA4 event payload
    const eventPayload = {
      client_id: clientId,
      events: [{
        name: 'form_submit',
        params: {
          engagement_time_msec: '100',
          session_id: Date.now().toString(),
          form_id: req.body.formId || 'test_api_form',
          form_name: req.body.formName || 'Test API Form Submit',
          form_destination: req.body.formDestination || 'test',
          value: req.body.value || 1.0,
          currency: 'USD',
          timestamp_micros: (Date.now() * 1000).toString()
        }
      }]
    };

    // Send event to GA4 Measurement Protocol
    const ga4Response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPayload)
      }
    );

    // GA4 Measurement Protocol returns 204 No Content on success
    if (ga4Response.status === 204) {
      res.status(200).json({
        success: true,
        message: 'GA4 form submit event sent successfully',
        event: {
          name: 'form_submit',
          clientId: clientId,
          formId: eventPayload.events[0].params.form_id,
          formName: eventPayload.events[0].params.form_name
        }
      });
    } else {
      const errorText = await ga4Response.text();
      console.error('GA4 API Error:', errorText);
      res.status(500).json({ 
        error: 'Failed to send GA4 event',
        details: errorText
      });
    }
  } catch (error) {
    console.error('Error sending GA4 event:', error);
    res.status(500).json({ error: 'Failed to send GA4 event', details: error.message });
  }
}