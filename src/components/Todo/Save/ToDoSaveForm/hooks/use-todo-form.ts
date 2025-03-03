import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToDoDetails } from '@/api/service/toDo/types';
import dayjs from 'dayjs';
import {
  SaveToDoValidationType,
  todoValidationSchema,
} from '@/components/Todo/Save/ToDoSaveForm/validators';
import { ActivationState } from '@/api/core/types';

type UseTodoFormProps = {
  toDoItem?: ToDoDetails | null;
};

export const useTodoForm = ({ toDoItem }: UseTodoFormProps) => {
  const defaultValuesForCreation = {
    isActive: ActivationState.Active,
    isCompleted: ActivationState.Inactive,
    showExpiration: false,
  };

  // Valores com base no item a ser editado
  const defaultValuesForEdit = {
    id: toDoItem?.id || null,
    isActive: toDoItem?.active, // Default caso não haja valor
    isCompleted: toDoItem?.isCompleted,
    name: toDoItem?.name || '',
    description: toDoItem?.description || '',
    expirationDate: toDoItem?.expirationDate
      ? dayjs(toDoItem.expirationDate)
      : null,
    expirationTime: toDoItem?.expirationDate
      ? dayjs(toDoItem.expirationDate).format('HH:mm:ss')
      : null,
    showExpiration: toDoItem?.expirationDate ? true : false,
    categories: toDoItem?.categories?.map((category) => category.id) || [],
    tags: toDoItem?.tags?.map((tag) => tag.id) || [],
  };

  const defaultValues = toDoItem
    ? defaultValuesForEdit
    : defaultValuesForCreation;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<SaveToDoValidationType>({
    resolver: yupResolver(todoValidationSchema),
    mode: 'onChange',
    defaultValues,
  });

  const isExpirationEnabled = watch('showExpiration');

  return {
    control,
    handleSubmit,
    reset,
    errors,
    watch,
    isExpirationEnabled,
  };
};
