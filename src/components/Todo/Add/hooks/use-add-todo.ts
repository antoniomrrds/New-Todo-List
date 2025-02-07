import { useCreateTodo } from '@/api/service/toDo/actions';
import { CreateToDo } from '@/api/service/toDo/types';
import { CreateTodoValidationType } from '@/components/Todo/Add/validators';
import { NotificationInstance } from 'antd/es/notification/interface';

type UseAddTodoProps = {
  notification: NotificationInstance;
  goToTodoPage: () => void;
};
export const useAddTodo = ({ goToTodoPage, notification }: UseAddTodoProps) => {
  const { createToDo, createToDoIsLoading } = useCreateTodo({
    notification,
    goToTodoPage,
  });

  const mapFormDataToCreateTodo = (
    data: CreateTodoValidationType,
  ): CreateToDo => {
    return {
      Active: data.isActive,
      idTags: data.tags,
      idCategories: data.categories,
      title: data.title,
      description: data.description,
      isCompleted: data.isCompleted,
      expirationDate: data.expirationDateTime || null,
    };
  };

  const handleFormSubmit = (data: CreateTodoValidationType) => {
    const dataToSend = mapFormDataToCreateTodo(data);
    createToDo(dataToSend);
  };

  return { isSaving: createToDoIsLoading, handleFormSubmit };
};
