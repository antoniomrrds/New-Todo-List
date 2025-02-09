import { ToDo } from '@/api/service/toDo/types';
import { obtainTodoStatusDetails } from '@/components/Todo/List/CardTodo/ToDoStatusBadge';
import * as S from '@/components/Todo/List/CardTodo/BadgeStatus/badge-status-styles';
export const BadgeStatus = ({ task }: { task: ToDo }) => {
  const { color, icon, text } = obtainTodoStatusDetails(task);
  return (
    <S.StatusBadge $Color={color}>
      {icon}
      {text}
    </S.StatusBadge>
  );
};
