import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const toggleProjectTop = async (id) => {
  return await axios.patch(`${API_URL}/api/project/${id}/top`, id, {
    withCredentials: true,
  });
};

export const recaptureProjectScreenshot = async (id) => {
  return await axios.patch(`${API_URL}/api/project/${id}/recapture`, id, {
    withCredentials: true,
  });
};

export const createProject = (data) => {
  return axios.post(`${API_URL}/api/project`, data, { withCredentials: true });
};
