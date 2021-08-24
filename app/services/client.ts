import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://52.209.167.227:4000/api/',
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
