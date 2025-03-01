import { ActivationState, PagedResponse } from '@/api/core/types';

type CategoryBase = {
  name: string;
  description: string;
  active: ActivationState;
};

export type CreateCategory = CategoryBase;

export type UpdateCategory = CategoryBase & {
  id: number;
};

export type Category = CategoryBase & {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdAtFormatted: string;
  updatedAtFormatted: string;
};

export type CategoryFilter = {
  name: string;
  PageSize: number;
  Page: number;
  Active: ActivationState;
};

export type FilteredCategoryResponse = PagedResponse<Category>;
