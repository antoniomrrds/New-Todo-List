export type PagedResponse<T> = {
  items: T[]; // Lista de itens do tipo genérico T
  totalItems: number; // Total de itens disponíveis
  page: number; // Página atual
  totalPages: number; // Total de páginas
  pageSize: number; // Quantidade de itens por página
};
