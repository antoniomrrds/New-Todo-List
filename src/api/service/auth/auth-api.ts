import { handleRequest } from '@/api/core';
import { axiosInstance } from '@/api/http/axios';
import { SignUp } from '@/api/service/auth/types';

export const authApi = {
  signUp: async (signUp: SignUp) => {
    const response = await handleRequest(
      axiosInstance.post('/auth/sign-up', signUp),
    );
    return response.data;
  },
};
