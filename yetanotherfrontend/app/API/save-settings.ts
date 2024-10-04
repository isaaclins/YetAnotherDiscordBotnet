// pages/api/save-settings.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    const filePath = path.join(process.cwd(), 'settings.js');
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to save settings.' });
      } else {
        res.status(200).json({ message: 'Settings saved successfully.' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}