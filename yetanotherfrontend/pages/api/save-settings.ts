import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const datajson = JSON.stringify(req.body);
      const dirPath = path.join(process.cwd(), "DATA");
      const filePath = path.join(dirPath, "settings.json");

      // Ensure the directory exists
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFile(filePath, datajson, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Failed to save settings." });
          return;
        }
        res.status(200).json({ message: "Settings saved successfully." });
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Invalid JSON data." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
