// src/redux/actions/authActions.js
import axios from "axios";
import { toast } from "react-hot-toast";
import { LOGIN_USER, REGISTER_USER, LOGIN_FAILURE, REGISTER_FAILURE } from "../actions/types";
const API_URL = "http://localhost:5000/api/auth"; // Backend API URL
//import { useNavigate } from "react-router-dom";

export const loginUser = (userData,navigate) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/login`, userData);
    const token = res.data.token;
    console.log("Login response", res.data);
    dispatch({
      type: LOGIN_USER,
      payload: {token},
    });   
    console.log("Login response", res.data);
    toast.success("Login successful");
    navigate("/on-board");
    return Promise.resolve(res.data);
  } catch (error) {
    console.error(
      "Login error",
      error.response ? error.response.data : error.message
    );
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.error(error.response.data.message || "Invalid credentials!");
          break;
        case 401:
          toast.error(error.response.data.message || "Unauthorized!");
          break;
        case 404:
          toast.error("User not found!");
          break;
        default:
          toast.error("Login failed! Please try again.");
      }
    } else {
      toast.error("Network error! Please check your connection.");
    }
    return Promise.reject(error);
  }
  
};

export const registerUser = (userData,navigate) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/register`, userData);
    console.log("Register response:", res.data);
    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
    
    toast.success("Registration successful!");
    console.log(res.data);
    navigate("/on-board");
    return Promise.resolve(res.data);
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
    return Promise.reject(error);
  }
};

export const updateUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/update`, userData);
    dispatch({
      type: "UPDATE_USER",
      payload: res.data,
    });
    toast.success('Profile updated successfully');
    return Promise.resolve(res.data);
  } catch (error) {
    console.error('Update error', error.response ? error.response.data : error.message);
    toast.error(error.response?.data?.message || 'Update failed!');
    return Promise.reject(error);
  }
};

export const logoutUser = (navigate) => (dispatch) => {
  dispatch({
    type: "LOGOUT_USER",
  });
  toast.success("Logout successful");
  navigate("/login");
};