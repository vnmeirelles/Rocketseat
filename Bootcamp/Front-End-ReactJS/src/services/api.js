import axios from 'axios'; 

const api = axios.create({
  baseURL: 'http://localhost:6900'
});

export default api;