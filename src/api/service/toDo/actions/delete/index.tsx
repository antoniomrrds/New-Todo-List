import { useMutation, useQueryClient } from 'react-query';
import { todoApi } from '@/api/service/toDo/todo-api';
import {
  ErrorNotification,
  SuccessNotification,
} from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { ErrorCodes } from '@/api/error/error-codes';
import { FormattedError } from '@/api/error/types';

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
      onError: ({ errors, status, message }: FormattedError) => {
        if (status === ErrorCodes.BAD_REQUEST) {
          ErrorNotification(
            notification,
            'Erro ao criar tarefa',
            message,
            errors,
          );
        } else {
          ErrorNotification(notification, 'Erro ao criar tarefa', message);
        }
      },
    },
  );

  return { deleteToDo, deleteToDoIsLoading };
};
