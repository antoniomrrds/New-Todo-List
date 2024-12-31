import { CreateToDo, ToDo, UpdateToDo } from "@/api/service/toDo/types";
import { axiosInstance } from "@/api/http/axios";
import { handleRequest } from "@/api/core";
import { AxiosResponse } from "axios";

export const todoApi = {
  getAll: async () => {
    const response = await handleRequest(axiosInstance.get<ToDo[]>("/todo"));
    return response.data;
  },

  create: async (createToDo: CreateToDo): Promise<AxiosResponse> => {
    return await handleRequest(axiosInstance.post("/todo", createToDo));
  },

  update: async (updateToDo: UpdateToDo) => {
    return handleRequest(
      axiosInstance.put(`/todo/${updateToDo.id}`, updateToDo)
    );
  },

  delete: async (id: number) => {
    return handleRequest(axiosInstance.delete(`/todo/${id}`));
  },
};
