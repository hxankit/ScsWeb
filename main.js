// main.js

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

import hpp from 'hpp';
import path, { dirname, join } from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import contactRouter from './Backend/routes/contact.routes.js';
import coursesRouter from './Backend/routes/courses.routes.js';
import adminRouter from './Backend/routes/Admin.routes.js';
import { connectdb } from './Backend/middlewars/connect.db.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ---------- Security Middlewares ----------
// Secure HTTP headers
app.use(helmet());

// Prevent XSS attacks

// Prevent HTTP parameter pollution
app.use(hpp());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});
app.use('/api', limiter);

// ---------- General Middlewares ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static uploads (images/docs/etc.)
app.use('/uploads', express.static(path.join(process.cwd(), 'Backend/uploads')));


// ---------- Routes ----------
app.use('/api/admin', adminRouter);
app.use('/api', contactRouter);
app.use('/api/courses', coursesRouter);

// ---------- Test Route ----------
app.get('/test', (req, res) => {
  res.json({ message: '✅ Server is secure and running' });
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 8000;

connectdb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err.message);
  });
