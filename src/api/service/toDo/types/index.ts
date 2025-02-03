import { PagedResponse } from '@/api/core/types';
import { ActivationState, TodoStatus } from '@/api/service/toDo/enum';

export type CreateToDo = {
  idTags: number[] | null | undefined;
  idCategories: number[] | null | undefined;
  title: string;
  description: string;
  isCompleted: number;
  Active: ActivationState;
  expirationDate: string | null;
};

export type UpdateToDo = {
  id: number;
  idTag: number[] | null | undefined;
  idCategory: number[] | null | undefined;
  title: string;
  description: string;
  isCompleted: number;
  Active: ActivationState;
  expirationDate: string | null;
};

export type ToDo = {
  id: number;
  title: string;
  description: string;
  isCompleted: number;
  active: ActivationState;
  status: TodoStatus;
  createdAt: string;
  updatedAt: string;
  expirationDate: string | null;
  createdAtFormatted: string;
  updatedAtFormatted: string;
  isExpirationDateValid: boolean;
};

export type ToDoFilter = {
  Title: string;
  Status: TodoStatus;
  PageSize: number;
  Page: number;
};
export type FilteredToDoResponse = PagedResponse<ToDo>;
