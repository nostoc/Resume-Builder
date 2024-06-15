import { UPDATE_PROFILE_FIELD } from "./types";
import axios from "axios";
//import { toast } from "react-toastify";
const API_URL = "http://localhost:5000/api/profile/upsert";

export const addPersonalInfo = () => ({
  type: "ADD_PERSONAL_INFO",
});

export const updatePersonalInfo = (index, field, value) => ({
  type: "UPDATE_PERSONAL_INFO",
  payload: { index, field, value },
});

export const removePersonalInfo = (index) => ({
  type: "REMOVE_PERSONAL_INFO",
  payload: index,
});

export const addEducation = () => ({
  type: "ADD_EDUCATION",
});

export const updateEducation = (index, field, value) => ({
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

export const updateExperience = (index, field, value) => ({
  type: "UPDATE_EXPERIENCE",
  payload: { index, field, value },
});

export const removeExperience = (index) => ({
  type: "REMOVE_EXPERIENCE",
  payload: index,
});

export const addSkill = () => ({
  type: "ADD_SKILL",
});

export const updateSkill = (index, field, value) => ({
  type: "UPDATE_SKILL",
  payload: { index, field, value },
});

export const removeSkill = (index) => ({
  type: "REMOVE_SKILL",
  payload: index,
});

export const addProject = () => ({
  type: "ADD_PROJECT",
});

export const updateProject = (index, field, value) => ({
  type: "UPDATE_PROJECT",
  payload: { index, field, value },
});

export const removeProject = (index) => ({
  type: "REMOVE_PROJECT",
  payload: index,
});

export const addAchievement = () => ({
  type: "ADD_ACHIEVEMENT",
});

export const updateAchievement = (index, field, value) => ({
  type: "UPDATE_ACHIEVEMENT",
  payload: { index, field, value },
});

export const removeAchievement = (index) => ({
  type: "REMOVE_ACHIEVEMENT",
  payload: index,
});

export const updateProfileField = (section, fieldData) => ({
  type: UPDATE_PROFILE_FIELD,
  payload: { section, fieldData },
});

export const addResponsibility = (expIndex) => ({
  type: "ADD_RESPONSIBILITY",
  payload: expIndex,
});

export const updateResponsibility = (expIndex, respIndex, value) => ({
  type: "UPDATE_RESPONSIBILITY",
  payload: { expIndex, respIndex, value },
});

export const removeResponsibility = (expIndex, respIndex) => ({
  type: "REMOVE_RESPONSIBILITY",
  payload: { expIndex, respIndex },
});
export const addSkillsUsed = (projectIndex) => ({
  type: "ADD_SKILLS_USED",
  payload: projectIndex,
});

export const updateSkillsUsed = (projectIndex, skillIndex, value) => ({
  type: "UPDATE_SKILLS_USED",
  payload: { projectIndex, skillIndex, value },
});

export const removeSkillsUsed = (projectIndex, skillIndex) => ({
  type: "REMOVE_SKILLS_USED",
  payload: { projectIndex, skillIndex },
});




export const getProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");
    console.log("Profile data fetched:", res.data);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data,
    });
  } catch (err) {
    console.error("Error fetching profile:", err);
    dispatch({
      type: "PROFILE_ERROR",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const saveProfileData =
  (profileData, token, navigate) => async (dispatch) => {
    dispatch({ type: "SAVE_PROFILE_REQUEST" });

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      console.log("Saving profile data:", profileData);
      const response = await axios.post(API_URL, profileData, config);

      dispatch({
        type: "SAVE_PROFILE_SUCCESS",
        payload: response.data,
      });
      navigate("/templates");
      //toast.success("Profile saved successfully!");
    } catch (error) {
      dispatch({
        type: "SAVE_PROFILE_FAILURE",
        payload: {
          message: error.message,
          status: error.response?.status || 500,
        },
      });
      console.error("Error saving profile data:", error);
      //toast.error("Failed to save profile!");
    }
  };

  export const setSelectedTemplate = (templateId) => ({
    type: "SET_SELECTED_TEMPLATE",
    payload: templateId,
  });
