import { handleRequest } from '@/api/core';
import { axiosInstance } from '@/api/http/axios';
import {
  CreateTag,
  FilteredTagResponse,
  Tag,
  TagFilter,
} from '@/api/service/tag/types';

export const TagApi = {
  getAll: async () => {
    const response = await handleRequest(axiosInstance.get<Tag[]>('/tag'));
    return response.data;
  },
  create: async (tag: CreateTag) => {
    return await handleRequest(axiosInstance.post('/tag', tag));
  },
  update: async (tag: Tag) => {
    return await handleRequest(axiosInstance.put(`/tag/${tag.id}`, tag));
  },
  delete: async (id: number) => {
    return await handleRequest(axiosInstance.delete(`/tag/${id}`));
  },
  doFilter: async (filter: TagFilter): Promise<FilteredTagResponse> => {
    const response = await handleRequest(
      axiosInstance.post<FilteredTagResponse>('/tag/dofilter', filter),
    );
    return response.data;
  },
};
