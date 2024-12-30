import { Category, CreateCategory } from "@/api/categories/types";
import { requestWrapper } from "@/api/core";
import {axiosInstance} from "@/api/http/axios";

export const categoryApi = {
  getAllCategories: async () => {
      const response = await requestWrapper(async () => {
          const { data } = await axiosInstance.get<Category[]>('/category');
          return data;
      });
      return response.data ?? [];
  },
  createCategory: async (category: CreateCategory) => {
      return await axiosInstance.post('/category', category);
  },
  updateCategory: async (category: Category) => {
      return await axiosInstance.put(`/category/${category.id}`, category);
  },
  deleteCategory: async (id: number) => {
      return await axiosInstance.delete(`/category/${id}`);
  },
}