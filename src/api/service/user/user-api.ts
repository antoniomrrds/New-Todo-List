import { handleRequest } from '@/api/core';
import { axiosInstance } from '@/api/http/axios';
import {
  UpdateUserProfile,
  UserChangeImageRequestDTO,
} from '@/api/service/user/types';

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
  update: async (data: UpdateUserProfile) => {
    const response = await handleRequest(axiosInstance.put('/user', data));
    return response.data;
  },
  changeImage: async (data: UserChangeImageRequestDTO) => {
    const response = await handleRequest(
      axiosInstance.put('/user/change-image', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    );

    return response.data;
  },
};
