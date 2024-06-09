// src/redux/actions/authActions.js
import axios from "axios";
import { toast } from "react-toastify";
import { LOGIN_USER, REGISTER_USER, LOGIN_FAILURE, REGISTER_FAILURE } from "../actions/types";
const API_URL = "http://localhost:5000/api/auth"; // Backend API URL

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    console.log("Login response", res.data);
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
    toast.success("Login successful");
  } catch (error) {
    console.error(
      "Login error",
      error.response ? error.response.data : error.message
    );
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
    toast.error(error.response?.data?.message || "Login failed!");
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    console.log("Register response:", res.data);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
    toast.success("Registration successful!");
    console.log(res.data);
  } catch (error) {
    console.error(
      "Register error:",
      error.response ? error.response.data : error.message
    );
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
    toast.error(error.response?.data?.message || "Registration failed!");
  }
};