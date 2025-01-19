// src/api/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://level-super-mind.onrender.com/researcher',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
