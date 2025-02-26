export enum TodoStatus {
  InProgress = 1,
  Expired = 2,
  Undetermined = 3,
  Completed = 4,
  Suspended = 0,
  Unfiltered = -1,
}

export const TodoStatusText = {
  [TodoStatus.InProgress]: 'Em andamento',
  [TodoStatus.Expired]: 'Expirado',
  [TodoStatus.Undetermined]: 'Indeterminado',
  [TodoStatus.Completed]: 'Concluído',
  [TodoStatus.Suspended]: 'Suspenso',
  [TodoStatus.Unfiltered]: 'Todos os status',
};

export const getTodoStatusText = (status: TodoStatus) => TodoStatusText[status];
