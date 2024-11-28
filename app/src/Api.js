import axios from 'axios';

const url = 'http://localhost:5000/api/tasks';

export const fetchTasksByDate = async (date) => {
  const response = await axios.get(`${url}/${date}`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(url, task);
  return response.data;
};

export const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`${url}/${id}`, updatedTask);
  return response.data;
};