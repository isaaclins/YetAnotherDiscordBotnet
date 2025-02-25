import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const pagesDir = path.join(process.cwd(), '/app/BuilderUI/pages');

    try {
        const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
        const languages = files.map(file => file.replace('.tsx', ''));
        res.status(200).json(languages);
    } catch (error) {
        console.error('Error reading files:', error);
        res.status(500).json({ error: 'Failed to fetch languages' });
    }
}