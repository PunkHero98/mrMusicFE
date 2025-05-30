import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8082/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to inclulde the token in the headers
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("x-access-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
