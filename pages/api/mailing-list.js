// pages/api/mailing-list.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    const API_KEY = process.env.GHL_API_KEY;
    const LOCATION_ID = process.env.GHL_LOCATION_ID;
    const BASE_URL = 'https://services.leadconnectorhq.com';
  
    try {
      // Step 1: Upsert the contact (v2)
      const upsertRes = await fetch(`${BASE_URL}/v2/contacts/upsert`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28', // Required API version
        },
        body: JSON.stringify({
          locationId: LOCATION_ID,
          email: email,
        }),
      });
  
      const upsertData = await upsertRes.json();
  
      if (!upsertRes.ok || !upsertData.contact || !upsertData.contact.id) {
        console.error('Upsert error:', upsertData);
        return res.status(500).json({ error: 'Failed to upsert contact' });
      }
  
      const contactId = upsertData.contact.id;
  
      // Step 2: Add "mailing_list" tag (v2)
      const tagRes = await fetch(`${BASE_URL}/v2/contacts/${contactId}/tags`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
        },
        body: JSON.stringify({
          tags: ['mailing_list'],
        }),
      });
  
      const tagData = await tagRes.json();
  
      if (!tagRes.ok) {
        console.error('Tag error:', tagData);
        return res.status(500).json({ error: 'Failed to add tag to contact' });
      }
  
      return res.status(200).json({ message: 'Contact added to mailing list' });
  
    } catch (err) {
      console.error('Server error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  