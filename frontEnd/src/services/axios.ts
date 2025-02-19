import axios from 'axios';

const apiUrl = 'http://localhost:1010/map'; 

const axiosApi = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    format: 'json',
  },
});

export default axiosApi;
