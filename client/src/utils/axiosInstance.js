import axios from "axios";
      
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Attach token to request headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
