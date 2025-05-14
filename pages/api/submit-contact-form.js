// /pages/api/submit-contact-form.js
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
    // Extract form data as before
    const { firstName, lastName, email, phone, address, city, state, country, postalCode, notes } = req.body;
    const name = `${firstName} ${lastName}`;
    const url = req.headers.referer || 'Direct Form';
  
    try {
      // Create/update contact
      const contactResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "locationId": `${process.env.GHL_LOCATION_ID}`,
          "phone": phone,
          "address1": address,
          "city": city,
          "state": state,
          "country": country || "US",
          "postalCode": postalCode,
          "timezone": "America/New_York",
          "tags": ["website_lead", "contact_form"],
          "customFields": [{
            "id": `${process.env.GHL_NOTES_FIELD}`,
            "key": "notes",
            "field_value": notes
          }],
          "source": `Website Contact Form - ${url}`
        }),
      });
  
      if (!contactResponse.ok) {
        const error = await contactResponse.text();
        console.log('GHL Contact API Error:', error);
        return res.status(500).json({ error });
      }
  
      const contactData = await contactResponse.json();
      const opportunityBody={
        "contactId": contactData.contact.id,
        "locationId": process.env.GHL_LOCATION_ID,
        "pipelineId": process.env.GHL_PIPELINE_ID,
        "pipelineStageId": process.env.GHL_NEW_LEAD_STAGE_ID, // Initial "New Lead" stage
        "name": `Website Lead - ${name}`,
        "monetaryValue": 200,
        "status": "open" // Keep it open by default
      }
      console.log("Opportunity request body:", opportunityBody);

      // Create opportunity with initial status
      const opportunityResponse = await fetch('https://services.leadconnectorhq.com/opportunities/upsert', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
          Accept: 'application/json'
        },
        body: JSON.stringify(opportunityBody),
      });

      console.log(opportunityResponse)
      
      if (!opportunityResponse.ok) {
        const error = await opportunityResponse.text();
        console.log('GHL Opportunity API Error:', error);
        return res.status(200).json({ 
          success: true, 
          warning: "Contact created but opportunity creation failed", 
          contactData 
        });
      }
  
      const opportunityData = await opportunityResponse.json();
      res.status(200).json({ success: true, contactData, opportunityData });
      
    } catch (err) {
      console.log('Server Error:', err);
      res.status(500).json({ error: err.message });
    }
  }