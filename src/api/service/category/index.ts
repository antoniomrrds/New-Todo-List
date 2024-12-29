import {axiosInstance} from "@/api/http/axios";

export type CreateCategory = {
    name: string;
    description: string;
    active: number;
};

export type Category = {
    id: number;
    name: string;
    description: string;
    active: number;
    createdAt: string;
    updatedAt: string;
    createdAtFormatted: string;
    updatedAtFormatted: string;
};

export const categoryservices = {
    getAllCategories: async (): Promise<Category[]> => {
        const response = await axiosInstance.get<Category[]>('/category');
        return response.data;
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