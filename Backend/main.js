import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mainApis from './routes/contact.routes.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Static files from Frontend build
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// APIs
app.use("/api", mainApis);

app.get("/test", (req, res) => {
  res.json("This is Server");
});

// ❗Fallback for SPA (must be after API routes)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
});
