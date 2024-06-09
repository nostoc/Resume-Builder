import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import resumeRoutes from "./routes/resume.js";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
//load env variables
dotenv.config();

//connect to db
connectDB();

const app = express();

//init middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to match your frontend's origin
}));

// Define Routes (we will add routes later)
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/resume", resumeRoutes);
// app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/profile', require('./routes/profile'));
// app.use('/api/resume', require('./routes/resume'));

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
