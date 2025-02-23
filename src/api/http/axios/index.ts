import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Adicionando o interceptor de requisição
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');

    // Se tiver token, adiciona o header de autorização
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
