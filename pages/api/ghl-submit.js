// /pages/api/ghl-submit.js (for Pages Router)
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { name, email, phone, medium } = req.body;
  
    try {
      const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          medium, // newsletter,miniform,fullform,etc
        }),
      });
  
      if (!response.ok) {
        const error = await response.text();
        return res.status(500).json({ error });
      }
  
      const data = await response.json();
      res.status(200).json({ success: true, data });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  