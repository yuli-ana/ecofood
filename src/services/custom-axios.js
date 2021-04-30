import axios from "axios";

const axiosInstance = axios.create();
const token = localStorage.getItem("token");

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  console.log("INTECEPTORS WORK");
  config.headers["authorization"] = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
