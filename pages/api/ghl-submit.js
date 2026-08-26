// /pages/api/ghl-submit.js (for Pages Router)
import { buildContactCustomFields, ghlHeaders } from '../../lib/ghl';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { name, email, phone, url, notes, zip } = req.body;

    try {
      const customFields = await buildContactCustomFields(notes);

      const response = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
        method: 'POST',
        headers: ghlHeaders(),
        body: JSON.stringify({
            "name": `${name}`,
            "email": `${email}`,
            "locationId": `${process.env.GHL_LOCATION_ID}`,
            "phone": `${phone}`,
            "postalCode": `${zip}`,
            "timezone": "America/New York",
            "tags": [
              "website_lead"
            ],
            "customFields": customFields,
            "source": `Website Contact Form - ${url}`,
            "country": "US"
          }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.log(error)
        return res.status(500).json({ error });
      }

      const data = await response.json();
      res.status(200).json({ success: true, data });
    } catch (err) {
    console.log(err)
      res.status(500).json({ error: err.message });
    }
  }
