import axios from 'axios';

const BASE_URL = 'YOUR_API_URL';

const api = axios.create({
  baseURL: `${BASE_URL}`,
});

export default api;
