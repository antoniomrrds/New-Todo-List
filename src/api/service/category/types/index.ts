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
