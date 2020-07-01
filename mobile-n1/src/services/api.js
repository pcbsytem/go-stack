import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.18.59.17:3333'
});

export default api;