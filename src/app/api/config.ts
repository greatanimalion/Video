import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.bilibili.com/',
});

export default api;