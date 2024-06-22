import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import resumeRoutes from "./routes/resume.js";
import connectDB from "./config/db.js";

//load env variables
dotenv.config();

//connect to db
connectDB();

const app = express();

app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});
//init middlewares
app.use(express.json());

//cors config
const allowedOrigins = ['http://localhost:5173', 'https://eazyrezume.senani.me/'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

// Define Routes (we will add routes later)
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/resumes", resumeRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

//global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
