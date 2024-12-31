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
