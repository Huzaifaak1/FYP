import axios from "axios";

const api = axios.create({
  baseURL: "https://fyp-be-theta.vercel.app/api",
  withCredentials: true,
});

export default api;
