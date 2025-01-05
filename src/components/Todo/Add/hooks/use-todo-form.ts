import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { todoValidationSchema } from '@/components/Todo/Add/validators';
import { CreateTodoValidationType } from '@/components/Todo/Add/validators';
import { CompletionStatus, TodoStatus } from '@/components/Todo/Add/enum';

export const useTodoForm = (onFormSubmitHandler: (data: CreateTodoValidationType) => void) => {
  const { control, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm<CreateTodoValidationType>({
    resolver: yupResolver(todoValidationSchema),
    mode: 'onChange',
    defaultValues: {
      isActive: TodoStatus.Active,
      isCompleted: CompletionStatus.Incomplete,
      showExpiration: false,
    },
  });

  const isExpirationEnabled = watch('showExpiration');


  return {
    control,
    handleSubmit,
    reset,
    errors,
    watch,
    setValue,
    isExpirationEnabled,
    onFormSubmitHandler
  };
};
