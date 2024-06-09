import { UPDATE_PROFILE_FIELD, SAVE_PROFILE_DATA } from "./types";
import axios from "axios";
import { toast } from "react-toastify";
const API_URL = 'http://localhost:5000/api/profile';

export const updateProfileField = (section,fieldData) => ({
  type: UPDATE_PROFILE_FIELD,
  payload: {section,fieldData},
});

export const saveProfileData = (profileData) => async (dispatch) => {
  try {
    console.log('Saving profile data:', profileData);
    const response = await axios.post(API_URL, profileData);
    dispatch({
      type: SAVE_PROFILE_DATA,
      payload: response.data,
    });
    toast.success("Profile saved successfully!");
  } catch (error) {
    console.error("Error saving profile data:", error);
    toast.error("Failed to save profile!");
  }
};