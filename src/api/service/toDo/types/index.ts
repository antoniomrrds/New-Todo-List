export type CreateToDo = {
    idTags: number[] | null | undefined;
    idCategories: number[] | null | undefined;
    title: string;
    description: string;
    isCompleted: number;
    Active: number;
    expirationDate: string | null;
};

export type UpdateToDo = {
    id: number;
    idTag: number[] | null | undefined;
    idCategory: number[] | null | undefined;
    title: string;
    description: string;
    isCompleted: number;
    Active: number;
    expirationDate: string | null;
};

export type ToDo = {
    id: number;
    idTag: number | null;
    idCategory: number | null;
    title: string;
    description: string;
    isCompleted: number;
    Active: number;
    createdAt: string;
    updatedAt: string;
    expirationDate: string | null;
    createdAtFormatted: string;
    updatedAtFormatted: string;
};
