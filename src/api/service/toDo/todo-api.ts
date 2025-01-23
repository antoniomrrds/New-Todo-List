import { handleRequest } from '@/api/core';
import { axiosInstance } from '@/api/http/axios';
import {
  CreateToDo,
  FilteredToDoResponse,
  ToDo,
  ToDoFilter,
  UpdateToDo,
} from '@/api/service/toDo/types';
import { AxiosResponse } from 'axios';
export const todoApi = {
  getAll: async (): Promise<ToDo[]> => {
    const response = await handleRequest(axiosInstance.get<ToDo[]>('/todo'));
    return response.data;
  },

  doFilter: async (filter: ToDoFilter): Promise<FilteredToDoResponse> => {
    const response = await handleRequest(
      axiosInstance.post<FilteredToDoResponse>('/todo/dofilter', filter),
    );
    return response.data;
  },

  create: (createToDo: CreateToDo): Promise<AxiosResponse> => {
    return handleRequest(axiosInstance.post('/todo', createToDo));
  },

  update: (updateToDo: UpdateToDo): Promise<AxiosResponse> => {
    return handleRequest(
      axiosInstance.put(`/todo/${updateToDo.id}`, updateToDo),
    );
  },

  delete: (id: number): Promise<AxiosResponse> => {
    return handleRequest(axiosInstance.delete(`/todo/${id}`));
  },
};
