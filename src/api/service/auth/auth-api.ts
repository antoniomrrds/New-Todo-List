import { handleRequest } from '@/api/core';
import { axiosInstance } from '@/api/http/axios';
import { SignUp, SignIn } from '@/api/service/auth/types';

export const authApi = {
  signUp: async (signUp: SignUp) => {
    const response = await handleRequest(
      axiosInstance.post('/auth/sign-up', signUp),
    );
    return response.data;
  },
  signIn: async (signIn: SignIn) => {
    const response = await handleRequest(
      axiosInstance.post('/auth/sign-in', signIn),
    );
    return response.data;
  },
  signOut: async () => {
    const response = await handleRequest(axiosInstance.get('/auth/sign-out'));
    return response;
  },
};
