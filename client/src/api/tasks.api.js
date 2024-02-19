import axios from "axios";

const API_URL = axios.create({
  baseURL: "http://127.0.0.1:3000/tasks/api/v1/tasks/",
});

export const getAllTasks = () => {
  return API_URL.get("/");
};

export const getTask = (id) => {
  return API_URL.get(`/${id}/`);
};

export const createTask = (task) => {
  return API_URL.post("/", task);
};

export const deleteTask = (id) => {
  return API_URL.delete(`/${id}`);
};

export const updateTask = (id, task) => {
  return API_URL.put(`/${id}/`, task);
};
