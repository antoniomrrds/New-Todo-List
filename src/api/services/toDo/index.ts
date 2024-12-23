import axiosInstance from "../../http/axiosInstance";

export type CreateTask = {
    idTag: number[] | null | undefined;
    idCategory: number[] | null | undefined;
    title: string;
    description: string;
    isCompleted: boolean;
    Active: boolean;
    expirationDate: string | null;
};


export type ToDo = {
    id: number;
    idTag: number | null;
    idCategory: number | null;
    title: string;
    description: string;
    isCompleted: boolean;
    status: number;
    createdAt: string;
    updatedAt: string;
    expirationDate: string | null;
    image: string | null;
    createdAtFormatted: string;
    updatedAtFormatted: string;
};

export const taskservices = {
    getAllTasks: async (): Promise<ToDo[]> => {
        const response = await axiosInstance.get<ToDo[]>('/todo');
        return response.data;
    },
    createTask: async (toDo: CreateTask) => {
        return await axiosInstance.post('/todo', toDo);
    },
    updateTask: async (toDo: ToDo) => {
        return await axiosInstance.put(`/todo/${toDo.id}`, toDo);
    },
    deleteTask: async (id: number) => {
        return await axiosInstance.delete(`/todo/${id}`);
    }
};
