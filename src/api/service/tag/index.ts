import {axiosInstance} from "@/api/http/axios";

export type CreateTag = {
    name: string;
    description: string;
    active: number;
};

export type Tag = {
    id: number;
    name: string;
    description: string;
    active: number;
    createdAt: string;
    updatedAt: string;
    createdAtFormatted: string;
    updatedAtFormatted: string;
};

export const tagservices = {
    getAllTags: async (): Promise<Tag[]> => {
        const response = await axiosInstance.get<Tag[]>('/tag');
        return response.data;
    },
    createTag: async (tag: CreateTag) => {
        return await axiosInstance.post('/tag', tag);
    },
    updateTag: async (tag: Tag) => {
        return await axiosInstance.put(`/tag/${tag.id}`, tag);
    },
    deleteTag: async (id: number) => {
        return await axiosInstance.delete(`/tag/${id}`);
    },
}