import { Resume } from "../models/resumeModel.js";
import { validationResult } from "express-validator";
import { Profile } from "../models/profileModel.js";

// Create a new resume
 export const createResume = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    const { profile ,selectedTemplate} = req.body;
    const newResume = new Resume({
      user: req.user.id,
      profile,
      selectedTemplate,
      
    });

    const resume = await newResume.save();
    res.json(resume);
    console.log("Received resume data:", req.body )
  } catch (err) {
    console.error("Error creating resume:",err.message);
    res.status(500).send("Server Error");
  }
};


// Get all resumes for the authenticated user
export const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.json(resumes);
    console.log("Fetching resumes for user:", req.user.id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get a specific resume by ID
export const getResumeById = async (req, res) => {
  try {
    console.log("Fetching resume with ID:", req.params.id); // Debugging
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      console.log("Resume not found");
      return res.status(404).json({ msg: "Resume not found" });
    }

    // Ensure user owns resume
    if (resume.user.toString() !== req.user.id) {
      console.log("Unauthorized access attempt by user:", req.user.id);
      return res.status(401).json({ msg: "User not authorized" });
    }

    console.log("Returning resume:", resume); // Debugging
    res.json(resume);
  } catch (err) {
    console.error("Error in getResumeById:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Resume not found" });
    }
    res.status(500).send("Server Error");
  }
};

export const getResumeByProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) {
      return res
        .status(400)
        .json({ message: "There is no profile for this user" });
    }

    // logic to format the profile data into a resume

    const resume = {
      personalInfo: profile.personalInfo,
      education: profile.education,
      experience: profile.experience,
      skills: profile.skills,
      projects: profile.projects,
      achievements: profile.achievements,
    };
    res.json(resume);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};


// Update a resume by ID
export const updateResume = async (req, res) => {
  try {
    console.log("Incoming update request:", req.body); // Debugging

    const { profile, selectedTemplate } = req.body;
    if (!profile) {
      return res.status(400).json({ msg: "Profile data is required" });
    }

    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({ msg: "Resume not found" });
    }

    if (resume.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Update the resume
    resume.profile = profile;
    resume.selectedTemplate = selectedTemplate || resume.selectedTemplate; // Keep old template if not provided
    await resume.save();

    console.log("Updated resume:", resume); // Debugging
    res.json(resume);
  } catch (err) {
    console.error("Error updating resume:", err.message);
    res.status(500).send("Server Error");
  }
};


// Delete a resume by ID
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ msg: "Resume not found" });
    }

    // Ensure the user owns the resume
    if (resume.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Delete the resume
    await resume.deleteOne();
    res.json({ msg: "Resume deleted" });
  } catch (err) {
    console.error("Error deleting resume:", err.message);
    res.status(500).send("Server Error");
  }
};
