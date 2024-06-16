import { ResumeTemplate } from "../models/resumeTemplateModel.js";
import { validationResult } from "express-validator";
import { Profile } from "../models/profileModel.js";

export const getResumeByProfile = async (req,res) =>{
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
  }catch(err){
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}












// @route  POST api/resume
// @desc   Create a resume template
// @access Private

export const createResumeTemplate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, description, fields } = req.body;
  try {
    const newTemplate = new ResumeTemplate({
      user: req.user.id,
      name,
      description,
      fields,
    });

    const template = await newTemplate.save();
    res.json(template);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route  GET api/resume
// @desc   Get all resume templates
// @access Public

export const getAllResumeTemplates = async (req, res) => {
  try {
    const templates = await ResumeTemplate.find();
    res.json(templates);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route  GET api/resume/:id
// @desc   Get resume template by ID
// @access Public

export const getResumeTemplateById = async (req, res) => {
  try {
    const template = await ResumeTemplate.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }
    res.json(template);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Resume Template not found" });
    }
    res.status(500).send("Server Error");
  }
};

// @route PUT api/resume/:id
// @desc Update resume template by ID
// @access Private

export const updateResumeTemplate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, description, fields } = req.body;

  const templateFields = {};
  if (name) templateFields.name = name;
  if (description) templateFields.description = description;
  if (fields) templateFields.fields = fields;

  try {
    let template = await ResumeTemplate.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Resume Template not found" });
    }
    // Make sure user owns the template
    if (template.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "User not authorized" });
    }

    template = await ResumeTemplate.findByIdAndUpdate(
      req.params.id,
      { $set: templateFields },
      { new: true }
    );

    res.json(template);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Resume Template not found" });
    }
    res.status(500).send("Server Error");
  }
};

// @route DELETE api/resume/:id
// @desc Delete resume template by ID
// @access Private

export const deleteResumeTemplate = async (req, res) => {
  try {
    const template = await ResumeTemplate.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ message: "Resume Template not found" });
    }
    // Make sure user owns the template
    if (template.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "User not authorized" });
    }

    //await template.remove();
   // res.json({ message: "Template removed" });

      await ResumeTemplate.findByIdAndDelete(req.params.id);
     res.json({ message: "Template removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Resume Template not found" });
    }
    res.status(500).send("Server Error");
  }
};
