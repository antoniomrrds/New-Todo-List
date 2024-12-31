import { Category, CreateCategory } from "@/api/service/category/types";
import { handleRequest } from "@/api/core";
import { axiosInstance } from "@/api/http/axios";

export const categoryApi = {
  getAll: async () => {
    const response = await handleRequest(
      axiosInstance.get<Category[]>("/category")
    );
    return response.data;
  },

  create: async (category: CreateCategory) => {
    return handleRequest(axiosInstance.post("/category", category));
  },

  update: async (category: Category) => {
    return handleRequest(
      axiosInstance.put(`/category/${category.id}`, category)
    );
  },

  delete: async (id: number) => {
    return handleRequest(axiosInstance.delete(`/category/${id}`));
  },
};
