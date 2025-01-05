import { FormattedError } from '@/api/error/types';
import { todoApi } from '@/api/service/toDo';
import { CreateToDo } from '@/api/service/toDo/types';
import { useMutation } from 'react-query';

import { ErrorCodes } from '@/api/error/error-codes';
import {
  ErrorNotification,
  SuccessNotification,
} from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';

type UseCreateTodoProps = {
  notification: NotificationInstance;
  goToTodoPage: () => void;
};

export const useCreateTodo = ({
  notification,
  goToTodoPage,
}: UseCreateTodoProps) => {
  const { mutate: createToDo, isLoading: createToDoIsLoading } = useMutation(
    (newToDo: CreateToDo) => todoApi.create(newToDo),
    {
      onSuccess: () => {
        // const location = response.headers.location;
        // const id = location.substring(location.lastIndexOf("/") + 1);
        SuccessNotification(
          notification,
          'Tarefa criada',
          'Tarefa criada com sucesso',
        );
        goToTodoPage();
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
          goToTodoPage();
        }
      },
    },
  );

  return { createToDo, createToDoIsLoading };
};
