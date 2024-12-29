import { CreateToDo, ToDo, UpdateToDo } from "@/api/toDo/types";
import { axiosInstance } from "@/api/http/axios";
import {  ApiErrorResponse, ApiResponse } from "@/api/error/types";
import { requestWrapper } from "@/api/core";
import { handleApiError } from "@/api/error";
import { AxiosError } from "axios";


  export const todoApi = {
    getAll: async () => {
        const response = await requestWrapper(async () => {
            const {data } = await axiosInstance.get<ToDo[]>('/todo');
            return data ;
        });
        return response.data ?? [];
    },
  
    create: async (createToDo: CreateToDo) => {
        try{
        const response = await axiosInstance.post('/todo', createToDo);
        console.log('Location:', response.headers.location); // Acessando o header Location

        return response;
        } catch (error) {
           const formattedError = handleApiError(error as  AxiosError<ApiErrorResponse>);
           throw formattedError;
         }
    },
  
    update: async (updateToDo: UpdateToDo): Promise<ApiResponse<ToDo>> => {
      return await requestWrapper(async () => {
        const response = await axiosInstance.put(`/todo/${updateToDo.id}`, updateToDo);
        return response.data;
      });
    },
  
    delete: async (id: number) => {
      return await requestWrapper(async () => {
        await axiosInstance.delete(`/todo/${id}`);
      });
    }
  };
  