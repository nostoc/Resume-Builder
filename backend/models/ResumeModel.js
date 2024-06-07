// backend/models/Resume.js
import mongoose from "mongoose";

//const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String },
});

const EducationSchema = new Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
});

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  technologies: [String],
});

const CertificationSchema = new Schema({
  name: { type: String, required: true },
  institution: { type: String },
  date: { type: Date },
});

const ResumeSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  summary: { type: String },
  experience: [ExperienceSchema],
  education: [EducationSchema],
  skills: [String],
  projects: [ProjectSchema],
  certifications: [CertificationSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Resume = mongoose.model("Resume", ResumeSchema);

