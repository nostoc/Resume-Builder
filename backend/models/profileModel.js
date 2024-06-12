import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    personalInfo: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
      linkedin: { type: String },
      website: { type: String },
      address: { type: String },
      city: { type: String, required: true },
      province: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    education: [
      {
        institution: { type: String, required: true },
        institutionCity: { type: String, required: true },
        institutionProvince: { type: String, required: true },
        degree: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
      },
    ],
    experience: [
      {
        company: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        position: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
        responibilities: [{ type: String, required: true }],
      },
    ],
    skills: [{ name: { type: String } }],
    projects: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
        link: { type: String },
        skillsUsed: [{   type: String, required: true  }],
      },
    ],

    achievements: [
      {
        title: { type: String, required: true },
        date: { type: Date, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Profile = mongoose.model("Profile", ProfileSchema);
