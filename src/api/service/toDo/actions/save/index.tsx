import { FormattedError } from '@/api/error/types';
import { todoApi } from '@/api/service/toDo';
import { CreateToDo, UpdateToDo } from '@/api/service/toDo/types';
import { useMutation } from 'react-query';

import { ErrorCodes } from '@/api/error/error-codes';
import {
  ErrorNotification,
  SuccessNotification,
} from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { SaveToDoValidationType } from '@/components/Todo/Save/ToDoSaveForm/validators';

type SaveTodoProps = {
  notification: NotificationInstance;
  goToTodoPage: () => void;
};

const mapFormDataSaveToDo = (
  data: SaveToDoValidationType,
): CreateToDo | UpdateToDo => {
  const baseData = {
    active: data.isActive,
    idTags: data.tags,
    idCategories: data.categories,
    title: data.title,
    description: data.description,
    isCompleted: data.isCompleted,
    expirationDate: data.expirationDateTime || null,
  };

  return data.id
    ? ({ ...baseData, id: data.id } as UpdateToDo)
    : (baseData as CreateToDo);
};

export const useSaveToDo = ({ notification, goToTodoPage }: SaveTodoProps) => {
  const mutation = useMutation(
    (data: CreateToDo | UpdateToDo) =>
      'id' in data ? todoApi.update(data) : todoApi.create(data),
    {
      onSuccess: (_, variables) => {
        // const location = response.headers.location;
        // const id = location.substring(location.lastIndexOf("/") + 1);
        processSuccessfulAction({
          notification,
          goToTodoPage,
          typeCreateOrUpdate: 'id' in variables ? 'atualizada' : 'criada',
        });
      },
      onError: (error: FormattedError, variables) => {
        processErrorAction({
          notification,
          error,
          goToTodoPage,
          typeCreateOrUpdate: 'id' in variables ? 'atualizar' : 'criar',
        });
      },
    },
  );

  const handleFormSubmit = (data: SaveToDoValidationType) => {
    console.log('data', mapFormDataSaveToDo(data));
    mutation.mutate(mapFormDataSaveToDo(data));
  };

  return { isSaving: mutation.isLoading, handleFormSubmit };
};

type processSuccessfulActionProps = {
  notification: NotificationInstance;
  goToTodoPage: () => void;
  typeCreateOrUpdate: string;
};
const processSuccessfulAction = ({
  notification,
  goToTodoPage,
  typeCreateOrUpdate,
}: processSuccessfulActionProps) => {
  SuccessNotification(
    notification,
    `Tarefa ${typeCreateOrUpdate}`,
    `Tarefa ${typeCreateOrUpdate} com sucesso`,
  );
  goToTodoPage();
};

type processErrorActionProps = {
  notification: NotificationInstance;
  error: FormattedError;
  goToTodoPage: () => void;
  typeCreateOrUpdate: string;
};

const processErrorAction = ({
  notification,
  error,
  goToTodoPage,
  typeCreateOrUpdate,
}: processErrorActionProps) => {
  const { errors, status, message } = error;
  if (status === ErrorCodes.BAD_REQUEST) {
    ErrorNotification(
      notification,
      `Error ao ${typeCreateOrUpdate} tarefa`,
      message,
      errors,
    );
  } else {
    ErrorNotification(
      notification,
      `Erro ao ${typeCreateOrUpdate} tarefa`,
      message,
    );
    goToTodoPage();
  }
};
