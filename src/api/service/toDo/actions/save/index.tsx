import { todoApi } from '@/api/service/toDo';
import { CreateToDo, UpdateToDo } from '@/api/service/toDo/types';
import { useMutation } from 'react-query';

import { SuccessNotification } from '@/components/shared/Notifications';
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
    name: data.name,
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
    },
  );

  const handleFormSubmit = (data: SaveToDoValidationType) => {
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
