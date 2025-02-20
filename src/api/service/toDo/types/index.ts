import { PagedResponse } from '@/api/core/types';
import { Category } from '@/api/service/category/types';
import { Tag } from '@/api/service/tag/types';
import { ActivationState, TodoStatus } from '@/api/service/toDo/enum';

// Tipo comum para a parte do "ToDo"
export type TodoBase = {
  name: string;
  description: string;
  isCompleted: ActivationState;
  active: ActivationState;
  expirationDate: string | null;
};

// Tipo para os parâmetros de filtro
export type ToDoFilter = {
  name: string;
  Status: TodoStatus;
  PageSize: number;
  Page: number;
  Active: ActivationState;
};

// Tipo de resposta paginada para todos os ToDos
export type FilteredToDoResponse = PagedResponse<ToDo>;

// Tipo para a criação de um ToDo
export type CreateToDo = TodoBase & {
  idTags: number[] | null | undefined;
  idCategories: number[] | null | undefined;
};

// Tipo para a atualização de um ToDo
export type UpdateToDo = TodoBase & {
  id: number;
  idTags: number[] | null | undefined;
  idCategories: number[] | null | undefined;
};

// Tipo para um ToDo
export type ToDo = TodoBase & {
  id: number;
  status: TodoStatus;
  createdAt: string;
  updatedAt: string;
  createdAtFormatted: string;
  updatedAtFormatted: string;
  expirationDateFormatted: string | null;
  isExpirationDateValid: boolean;
};

// Tipo para detalhes de um ToDo, incluindo tags e categorias
export type ToDoDetails = ToDo & {
  statusDescription: string;
  tags: Tag[];
  categories: Category[];
};
