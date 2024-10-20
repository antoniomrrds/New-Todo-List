import axiosInstance from "../../http/axiosInstance";

export type CreateTask = {
    idTag: number | null;
    idCategory: number | null;
    title: string;
    description: string;
    isCompleted: boolean;
    status: number;
    createdAt: string;
    updatedAt: string;
};

export type Task = {
    id: number;
    idTag: number | null;
    idCategory: number | null;
    title: string;
    description: string;
    isCompleted: boolean;
    status: number;
    createdAt: string;
    updatedAt: string;
    createdAtFormatted: string;
    updatedAtFormatted: string;
};

export const taskservices = {
    getAllTasks: async (): Promise<Task[]> => {
        const response = await axiosInstance.get<Task[]>('/task');
        return response.data;
    },
    createTask: async (task: CreateTask) => {
        return await axiosInstance.post('/task', task);
    },
    updateTask: async (task: Task) => {
        return await axiosInstance.put(`/task/${task.id}`, task);
    },
    deleteTask: async (id: number) => {
        return await axiosInstance.delete(`/task/${id}`);
    },
    filterTasks: async (filter: any) => {
        return await axiosInstance.post('/task/filter', filter);
    },
};
