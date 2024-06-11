import { UPDATE_PROFILE_FIELD } from "./types";
import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:5000/api/profile";

export const addPersonalInfo = () => ({
  type: "ADD_PERSONAL_INFO",
});

export const updatePersonalInfo = (index,field, value) => ({
  type: "UPDATE_PERSONAL_INFO",
  payload: { index,field, value },
});

export const removePeronalInfo = (index) => ({
  type: "REMOVE_PERSONAL_INFO",
  payload: index,
});



export const addEducation = () => ({
  type: "ADD_EDUCATION",
});

export const updateEducation = (index, field, value ) => ({
  type: "UPDATE_EDUCATION",
  payload: { index, field, value },
});

export const removeEducation = (index) => ({
  type: "REMOVE_EDUCATION",
  payload: index,
});

export const addExperience = () => ({
  type: "ADD_EXPERIENCE",
});

export const updateExperience = (index, field, value ) => ({
  type: "UPDATE_EXPERIENCE",
  payload: { index, field, value  },
});

export const removeExperience = (index) => ({
  type: "REMOVE_EXPERIENCE",
  payload: index,
});

export const addSkill = () => ({ 
  type: "ADD_SKILL" });

export const updateSkill = (index, field, value ) => ({
  type: "UPDATE_SKILL",
  payload: { index, field, value  },
});

export const removeSkill = (index) => ({
  type: "REMOVE_SKILL",
  payload: index,
});

export const addProject = () => ({
  type: "ADD_PROJECT",
});

export const updateProject = (index, field, value ) => ({
  type: "UPDATE_PROJECT",
  payload: { index, field, value  },
});

export const removeProject = (index) => ({
  type: "REMOVE_PROJECT",
  payload: index,
});


export const updateProfileField = (section, fieldData) => ({
  type: UPDATE_PROFILE_FIELD,
  payload: { section, fieldData },
});

export const saveProfileData = (profileData) => async (dispatch) => {
  try {
    console.log("Saving profile data:", profileData);
    const response = await axios.post(API_URL, profileData);
    dispatch({
      type: "SAVE_PROFILE_SUCCESS",
      payload: response.data,
    });
    toast.success("Profile saved successfully!");
  } catch (error) {
    dispatch({
      type: "SAVE_PROFILE_FAILURE",
      payload: error,
    });
    console.error("Error saving profile data:", error);
    toast.error("Failed to save profile!");
  }
};
