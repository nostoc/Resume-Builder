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
  console.log("Request received:", req.method, req.url);
  next();
});
//init middlewares
app.use(express.json());

//cors config
const allowedOrigins = [
  "http://localhost:5173",
  "https://eazyrezume.senani.me/",
];

app.use(
  cors({
    origin: "http://localhost:5173", // change this after "http://localhost:5173" to "https://eazyrezume.senani.me/" when deploying
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);

// Define Routes (we will add routes later)
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/resumes", resumeRoutes);

dotenv.config();
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);

const port = process.env.PORT || 5000;
//server
app.listen(port, () => {
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
