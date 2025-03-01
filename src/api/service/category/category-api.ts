import {
  Category,
  CategoryFilter,
  CreateCategory,
  FilteredCategoryResponse,
  UpdateCategory,
} from '@/api/service/category/types';
import { handleRequest } from '@/api/core';
import { axiosInstance } from '@/api/http/axios';

export const CategoryApi = {
  getAll: async () => {
    const response = await handleRequest(
      axiosInstance.get<Category[]>('/category'),
    );
    return response.data;
  },

  create: async (category: CreateCategory) => {
    return handleRequest(axiosInstance.post('/category', category));
  },

  update: async (category: UpdateCategory) => {
    return handleRequest(
      axiosInstance.put(`/category/${category.id}`, category),
    );
  },

  delete: async (id: number) => {
    return handleRequest(axiosInstance.delete(`/category/${id}`));
  },

  details: async (id: number) => {
    const response = await handleRequest(
      axiosInstance.get<Category>(`/category/${id}`),
    );
    return response.data;
  },

  doFilter: async (
    filter: CategoryFilter,
  ): Promise<FilteredCategoryResponse> => {
    const response = await handleRequest(
      axiosInstance.post<FilteredCategoryResponse>(
        '/category/do-filter',
        filter,
      ),
    );
    return response.data;
  },
};
