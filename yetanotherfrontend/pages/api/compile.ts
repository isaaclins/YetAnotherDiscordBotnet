// [pages/api/compile.ts]
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "POST") {
      try {
        res.status(200).json({ message: "Compilation started." });
        console.log("Compiling!!!")
      }
      catch (error) {
        console.error(error);
        res.status(400).json({ message: "Invalid JSON data." });
      }
    }
    }
