import axios from 'axios';

const BASE_URL = 'https://4ad0-149-19-165-93.ngrok-free.app';

const api = axios.create({
  baseURL: `${BASE_URL}`,
});

export default api;
