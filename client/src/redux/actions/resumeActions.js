import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-hot-toast";

export const getResumes = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axiosInstance.get("/resumes", config);
    dispatch({ type: "GET_RESUMES", payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    console.error("Error fetching resumes", err);
    toast.error("Failed to load resumes");
    return Promise.reject(err);
  }
};

export const getResume = (id) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axiosInstance.get(`/resumes/${id}`, config);
    dispatch({ type: "GET_RESUME", payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    console.error("Error fetching resume", err);
    toast.error("Failed to load resume");
    return Promise.reject(err);
  }
};

export const createResume = (resumeData) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const res = await axiosInstance.post("/resumes", resumeData, config);
    dispatch({ type: "CREATE_RESUME", payload: res.data });
    toast.success("Resume created successfully!");
    return Promise.resolve(res.data);
  } catch (err) {
    console.error("Error creating resume", err);
    toast.error("Failed to create resume");
    return Promise.reject(err);
  }
};

export const saveResumeData = (resumeData, token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const res = await axiosInstance.post("/resumes", resumeData, config);
    dispatch({ type: "SAVE_RESUME", payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    console.error("Error saving resume", err);
    toast.error("Failed to save resume");
    return Promise.reject(err);
  }
};

export const updateResume = (id, resumeData) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const res = await axiosInstance.put(`/resumes/${id}`, resumeData, config);
    dispatch({ type: "UPDATE_RESUME", payload: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    console.error("Error updating resume", err);
    toast.error("Failed to update resume");
    return Promise.reject(err);
  }
};

export const deleteResume = (id) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axiosInstance.delete(`/resumes/${id}`, config);
    dispatch({ type: "DELETE_RESUME", payload: id });
    toast.success("Resume deleted successfully!");
    return Promise.resolve();
  } catch (err) {
    console.error("Error deleting resume", err);
    toast.error("Failed to delete resume");
    return Promise.reject(err);
  }
};

export const getUserResumes = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/resume");
    dispatch({
      type: "GET_USER_RESUMES_SUCCESS",
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch({
      type: "GET_USER_RESUMES_FAILURE",
      payload: error.message,
    });
    toast.error("Failed to load user resumes");
    return Promise.reject(error);
  }
};
