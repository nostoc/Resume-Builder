import mongoose from "mongoose";

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

export const ResumeTemplate = mongoose.model("ResumeTemplate", ResumeTemplateSchema);