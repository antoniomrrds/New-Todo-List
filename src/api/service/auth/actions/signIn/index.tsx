import { useMutation } from 'react-query';
import { authApi, SignIn } from '@/api/service/auth';
import { NotificationInstance } from 'antd/es/notification/interface';
import { SignInValidationType } from '@/components/Auth/SignIn/Validation';
import { useAuth } from '@/context/auth';
import { FormattedError } from '@/api/core/error/types';
import { HandleError } from '@/components/shared/HandleError';

type SignInProps = {
  notification: NotificationInstance;
  goToTodoPage: () => void;
};

export const useSignIn = ({ goToTodoPage, notification }: SignInProps) => {
  const { setIsAuthenticated, loadData } = useAuth();
  const mutation = useMutation(
    (signUpData: SignIn) => authApi.signIn(signUpData),
    {
      onSuccess: () => {
        setIsAuthenticated(true);
        loadData();
        goToTodoPage();
      },
      onError: (error: FormattedError) => {
        setIsAuthenticated(false);
        HandleError(error, notification);
      },
    },
  );

  const handleFormSubmit = (values: SignInValidationType) => {
    mutation.mutate(values);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
