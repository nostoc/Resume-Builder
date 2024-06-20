import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  profile: {
    type: Object,
    required: true,
  },
  selectedTemplate: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Resume = mongoose.model("Resume", ResumeSchema);


/*
const FieldSchema = new mongoose.Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
});

const ResumeTemplateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fields: [FieldSchema],
  },
  {
    timestamps: true,
  }
);

export const ResumeTemplate = mongoose.model(
  "ResumeTemplate",
  ResumeTemplateSchema
);
*/