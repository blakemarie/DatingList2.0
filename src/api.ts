import axios from 'axios';

const API_URL = 'https://api.example.com/datters'; // Replace with actual API

export const getDaters = () => axios.get(`${API_URL}`);
export const createDater = (data) => axios.post(`${API_URL}`, data);
export const updateDater = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteDater = (id) => axios.delete(`${API_URL}/${id}`);
