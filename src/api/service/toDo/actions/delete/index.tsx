import { useMutation, useQueryClient } from 'react-query';
import { todoApi } from '@/api/service/toDo/todo-api';
import { SuccessNotification } from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';

type UseDeleteTodoProps = {
  notification: NotificationInstance;
};

export const useDeleteTodo = ({ notification }: UseDeleteTodoProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteToDo, isLoading: deleteToDoIsLoading } = useMutation(
    (id: number) => todoApi.delete(id), // Chama a API para deletar o item
    {
      onSuccess: () => {
        SuccessNotification(
          notification,
          'Tarefa deletada',
          'A tarefa foi deletada com sucesso',
        );

        // Invalida a query para atualizar a lista de tarefas
        queryClient.invalidateQueries(['filteredTodos']);
      },
    },
  );

  return { deleteToDo, deleteToDoIsLoading };
};
