// src/redux/actions/authActions.js
import axios from "axios";
const API_URL = "http://localhost:5000/api/auth"; // Backend API URL

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    console.log("Login response", res.data);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
    // Dispatch success action if needed
  } catch (error) {
    console.error(
      "Login error",
      error.response ? error.response.data : error.message
    );
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response ? error.response.data : error.message,
    });
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    console.log("Register response:", res.data);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.error(
      "Register error:",
      error.response ? error.response.data : error.message
    );
    dispatch({
      type: "REGISTER_FAILURE",
      payload: error.response ? error.response.data : error.message,
    });
  }
};
