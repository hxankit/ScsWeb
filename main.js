import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';

import contactRouter from './Backend/routes/contact.routes.js';
import adminRouter from './Backend/routes/Admin.routes.js'
import coursesRouter from './Backend/routes/courses.routes.js';
import { connectdb } from './Backend/middlewars/connect.db.js';

dotenv.config();

const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// ---------- Security Middlewares ----------
app.use(helmet());                  // Sets security-related HTTP headers
app.use(hpp());                     // Prevents HTTP Parameter Pollution
app.use(cookieParser());            // Parses cookies

app.use(cors({
  origin: [
    'http://scstechnologies.in',
    'https://scstechnologies.in',
    'http://www.scstechnologies.in',
    'https://4.174.129.147',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST','DELETE'],
  credentials: true,
}));


// ---------- Rate Limiting ----------
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,         // 15 minutes
  max: 100,                         // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.',
});
app.use('/api', limiter);

// ---------- Body Parsers ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------- Serve Frontend Dist ----------
// yy

// ---------- API Routes ----------
app.use('/api', contactRouter);
app.use('/api/admin',adminRouter)
app.use('/api/courses', coursesRouter);

// ---------- Test Route ----------
app.get('/test', (req, res) => {
  res.json('This is Server');
});

// ---------- Fallback for SPA ----------
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, './Frontend/dist', 'index.html'), (err) => {
//     if (err) {
//       res.status(500).send('Error loading frontend');
//     }
//   });
// });

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;
connectdb()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is Listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to DB:', err.message);
  });
