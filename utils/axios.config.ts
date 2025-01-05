import axios from 'axios';

const API_URL = process.env.BASE_URL??"http://192.168.1.65"

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
