import { google } from "googleapis";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const keys = require("../../scsdata-465914-45d3cb642ec4.json");
const SHEET_ID = process.env.SHEET_ID;

export const contactDetails = async (req, res) => {
  const { name, email, mobile, message } = req.body;
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: keys,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "RAW",
      resource: {
        values: [[name, email, mobile, message]],
      },
    });

    res.status(200).json({ message: "Data added to Google Sheet!" });
  } catch (error) {
    console.error("Error writing to sheet:", error);
    res.status(500).json({ error: "Failed to write to sheet" });
  }
};

export const testApi = (req, res) => {
  res.json("API Working fine");
};
