type TagBase = {
  name: string;
  description: string;
  active: number;
};

export type CreateTag = TagBase;

export type Tag = TagBase & {
  id: number;
  createdAt: string;
  updatedAt: string;
  color: string;
  createdAtFormatted: string;
  updatedAtFormatted: string;
};
