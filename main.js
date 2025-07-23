import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import contactRouter from './Backend/routes/contact.routes.js';
import coursesRouter from './Backend/routes/courses.routes.js';
import adminRouter from './Backend/routes/Admin.routes.js';
import { connectdb } from './Backend/middlewars/connect.db.js';

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(process.cwd(), 'Backend/uploads')));
// CORS
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    
    credentials: true,
}));

// Static files from Frontend build
app.use(express.static(path.join(__dirname, './Frontend/dist')));

// APIs
app.use("/api/admin/",adminRouter)
app.use("/api/", contactRouter);
app.use("/api/courses", coursesRouter);

app.get("/test", (req, res) => {
    res.json("This is Server");
});

// ❗Fallback for SPA (must be after API routes)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, './Frontend/dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;

connectdb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Listening on http://localhost:${PORT}`);
        });
    })

