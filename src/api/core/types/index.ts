export type PagedResponse<T> = {
  items: T[]; // Lista de itens do tipo genérico T
  totalItems: number; // Total de itens disponíveis
  page: number; // Página atual
  totalPages: number; // Total de páginas
  pageSize: number; // Quantidade de itens por página
};

export enum ActivationState {
  Active = 1,
  Inactive = 0,
  Unfiltered = -1,
}

export const ActivationStateText = {
  [ActivationState.Active]: 'Ativo',
  [ActivationState.Inactive]: 'Inativo',
  [ActivationState.Unfiltered]: 'Todos os (Ativos e Inativos)',
};

export const getActivationStateText = (status: ActivationState) =>
  ActivationStateText[status];
