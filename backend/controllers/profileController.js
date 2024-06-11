import { Profile } from "../models/profileModel.js";
import { validationResult } from "express-validator";

// @route   GET api/profile/me
// @desc    Get current user profile
// @access  Private

export const getCurrentProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res
        .status(400)
        .json({ message: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private

export const createOrUpdateProfile = async (req, res) => {
  console.log("createOrUpdateProfile called"); //log function call
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation error", errors.array()); //log validation errors
    return res.status(400).json({ errors: errors.array(),status:400 });
  }
  console.log("Request body", req.body); //log incoming request body
  const { personalInfo, education, experience, skills, projects } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (personalInfo) profileFields.personalInfo = personalInfo;
  if (education) profileFields.education = education;
  if (experience) profileFields.experience = experience;
  if (skills) profileFields.skills = skills;
  if (projects) profileFields.projects = projects;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      //update profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    //create profile
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: "Server Error",status:500});
  }
};

// @route   DELETE api/profile
// @desc    Delete profile
// @access  Private

export const deleteProfile = async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndDelete({ user: req.user.id });
    res.json({ message: "Profile deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
