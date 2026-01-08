import axios from "axios";

export const toggleProjectTop = async (id) => {
  return await axios.patch(`http://localhost:3000/api/project/${id}/top`);
};

export const recaptureProjectScreenshot = async (id) => {
  console.log("you hit recaptureProjectScreenshot");
};

export const createProject = (data) => {
  return axios.post("http://localhost:3000/api/project", data);
};
