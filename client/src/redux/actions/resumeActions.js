import axios from "axios";
//import { toast } from 'react-toastify';

export const getResumes = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.get("http://localhost:5000/api/resumes", config);
    dispatch({ type: "GET_RESUMES", payload: res.data });
  } catch (err) {
    console.error(err);
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
    const res = await axios.get(
      `http://localhost:5000/api/resumes/${id}`,
      config
    );
    dispatch({ type: "GET_RESUME", payload: res.data });
  } catch (err) {
    console.error(err);
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
    const res = await axios.post(
      "http://localhost:5000/api/resumes",
      resumeData,
      config
    );
    dispatch({ type: "CREATE_RESUME", payload: res.data });
  } catch (err) {
    console.error(err);
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

    const res = await axios.post("http://localhost:5000/api/resumes", resumeData, config);
    dispatch({ type: "SAVE_RESUME", payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

/*export const getResume = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get('http://localhost:5000/api/resume/generate', config);
    
    dispatch({
      type: "GET_RESUME",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "RESUME_ERROR",
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    toast.error('Failed to load resume!');
  }
};*/

export const getUserResumes = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/resume"); // Replace with your API endpoint
    dispatch({
      type: "GET_USER_RESUMES_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_RESUMES_FAILURE",
      payload: error.message,
    });
  }
};
