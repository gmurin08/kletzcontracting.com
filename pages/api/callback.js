// /pages/api/oauth/callback.js
import fs from 'fs/promises';
import path from 'path';

const TOKEN_PATH = path.resolve(process.cwd(), 'tokens.json');

export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).send('Missing code');

  const tokenRes = await fetch('https://api.gohighlevel.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GHL_CLIENT_ID,
      client_secret: process.env.GHL_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.GHL_REDIRECT_URI,
    }),
  });

  const tokens = await tokenRes.json();
  if (!tokenRes.ok) return res.status(500).json(tokens);

  await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2));
  res.status(200).send('Authorization successful. Tokens saved.');
}
