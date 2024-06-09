import express from "express";
import { check } from "express-validator";
import {
  getCurrentProfile,
  createOrUpdateProfile,
  deleteProfile,
} from "../controllers/profileController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// @route    GET api/profile/me
// @desc     Get current user profile
// @access   Private
router.get("/me", auth, getCurrentProfile);

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/upsert",
  [
    auth,
    check("personalInfo", "Personal Info is required").not().isEmpty(),
    check("education", "Education is required").not().isEmpty(),
    check("experience", "Experience is required").not().isEmpty(),
    check("skills", "Skills is required").not().isEmpty(),
    check("projects", "Projects is required").not().isEmpty(),
  ],
  createOrUpdateProfile
);

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete("/delete", auth, deleteProfile);

export default router;
