import express from "express";
import { check } from "express-validator";
import auth from "../middleware/auth.js";

import {
  getResumeByProfile,
  createResume,
  getAllResumes,
  getResumeById,
} from "../controllers/resumeController.js";

const router = express.Router();

router.post("/", auth, createResume);
router.get("/", auth, getAllResumes);
router.get("/:id", auth, getResumeById);
router.get("/generate", auth, getResumeByProfile);
/*
// @route  POST api/resume
// @desc   Create a resume template
// @access Private
router.post(
  "/",
  auth,
  [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("fields", "Fields is required").not().isEmpty(),
  ],
  createResumeTemplate
);

// @route  GET api/resume
// @desc   Get all resume templates
// @access Public
router.get("/", getAllResumeTemplates);

// @route  GET api/resume/:id
// @desc   Get resume template by ID
// @access Public
router.get("/:id", getResumeTemplateById);

// @route  PUT api/resume/:id
// @desc   Update resume template by ID
// @access Private
router.put("/:id", [
  auth,
  [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("fields", "Fields is required").not().isEmpty(),
  ],
  updateResumeTemplate,
]);

// @route  DELETE api/resume/:id;
// @desc   Delete resume template by ID
// @access Private
router.delete("/:id", auth, deleteResumeTemplate);
*/
export default router;
