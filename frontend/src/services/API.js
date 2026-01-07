import axios from "axios";

const API = axios.create({
  baseURL: "https://my-portfolio-j3j9.onrender.com", // backend URL
  timeout: 40000,
});

export default API;
