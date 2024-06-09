import express from "express";
import { check } from "express-validator";
import { authUser, registerUser } from "../controllers/authController.js";
import e from "express";

const router = express.Router();

// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  registerUser
);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  authUser
);
export default router;
