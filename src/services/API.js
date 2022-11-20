import axios from 'axios';
import { BASE_URL } from '../constants';

const globalAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
//Interceptors
globalAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return new Promise.reject(error);
  }
);
globalAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return new Promise.reject(error);
  }
);
export default globalAxios;
