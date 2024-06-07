import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./models/UserModel.js";
import cors from "cors";
const app = express();
dotenv.config();
import cookieParser from "cookie-parser";
import authRoute from "./routes/AuthRoute.js";
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to MongoDB", err);
  });



app.use(
  cors({
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/",authRoute)

/*app.get("/", async (req, res) => {
  console.log(res);
  return res.status(200).send("This is my resume Builder");
});


// request to create a new resume
app.post("/register", async (req, res) => {
  try {
    if (!req.body.username || !req.body.email || !req.body.password) {
      return res
        .status(400)
        .send({ message: "username, email and password are required" });
    }
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await User.create(newUser);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ messsage: error.message });
  }
});*/
