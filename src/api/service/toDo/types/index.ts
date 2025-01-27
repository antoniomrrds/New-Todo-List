import { PagedResponse } from '@/api/core/types';
import { TodoStatus } from '@/components/Todo/Add/enum';

export type CreateToDo = {
  idTags: number[] | null | undefined;
  idCategories: number[] | null | undefined;
  title: string;
  description: string;
  isCompleted: number;
  Active: TodoStatus;
  expirationDate: string | null;
};

export type UpdateToDo = {
  id: number;
  idTag: number[] | null | undefined;
  idCategory: number[] | null | undefined;
  title: string;
  description: string;
  isCompleted: number;
  Active: TodoStatus;
  expirationDate: string | null;
};

export type ToDo = {
  id: number;
  title: string;
  description: string;
  isCompleted: number;
  Active: TodoStatus;
  createdAt: string;
  updatedAt: string;
  expirationDate: string | null;
  createdAtFormatted: string;
  updatedAtFormatted: string;
};

export type ToDoFilter = {
  Title: string;
  Active: TodoStatus;
  PageSize: number;
  Page: number;
};
export type FilteredToDoResponse = PagedResponse<ToDo>;
