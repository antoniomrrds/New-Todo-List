import { handleRequest } from '@/api/core';
import { axiosInstance } from '@/api/http/axios';

export const UserApi = {
  getUser: async () => {
    const response = await handleRequest(axiosInstance.get('/user'));
    return response.data;
  },
  changePassword: async (password: string) => {
    const response = await handleRequest(
      axiosInstance.post('/user/change-password', { password }),
    );
    return response.data;
  },
};
