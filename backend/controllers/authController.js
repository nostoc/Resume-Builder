import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../util/error.js";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;
  try{
    let user = await User.findOne({ email});
    if(user){
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists"});
    }

    user = new User({
      username,
      email,
      password
    });

    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 864000000},
      (err, token) => {
        if(err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
// Authenticate user and get token 

export const authUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try{
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({ message: "Invalid Credentials"});
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({ message: "Invalid Credentials"});
    }

    const payload = {
      user: {
        id: user.id
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000},
      (err, token) => {
        if(err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};



