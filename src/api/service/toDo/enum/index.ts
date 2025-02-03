export enum ActivationState {
  Active = 1,
  Inactive = 0,
}
export enum TodoStatus {
  Active = 1,
  Expired = 2,
  Undetermined = 3,
  Completed = 4,
  Inactive = 0,
  Unfiltered = -1,
}

const TodoStatusText = {
  [TodoStatus.Active]: 'Ativo',
  [TodoStatus.Expired]: 'Expirado',
  [TodoStatus.Undetermined]: 'Indeterminado',
  [TodoStatus.Completed]: 'Concluído',
  [TodoStatus.Inactive]: 'Inativo',
  [TodoStatus.Unfiltered]: 'Status',
};

export const getTodoStatusText = (status: TodoStatus) => TodoStatusText[status];
