import { useMutation } from 'react-query';
import { authApi, SignIn } from '@/api/service/auth';
import { ErrorNotification } from '@/components/shared/Notifications';
import { ErrorCodes } from '@/api/error/error-codes';
import { NotificationInstance } from 'antd/es/notification/interface';
import { FormattedError } from '@/api/error/types';
import { SignInValidationType } from '@/components/Auth/SignIn/Validation';
import { useAuth } from '@/context/auth';
type SignInProps = {
  notification: NotificationInstance;
  goToTodoPage: () => void;
};

export const useSignIn = ({ goToTodoPage, notification }: SignInProps) => {
  const { setIsAuthenticated } = useAuth();
  const mutation = useMutation(
    (signUpData: SignIn) => authApi.signIn(signUpData),
    {
      onSuccess: () => {
        setIsAuthenticated(true);
        goToTodoPage();
      },
      onError: (error: FormattedError) => {
        setIsAuthenticated(false);
        const { errors, status, message } = error;
        if (status === ErrorCodes.BAD_REQUEST) {
          ErrorNotification(
            notification,
            `Error ao Logar o usuário`,
            message,
            errors,
          );
        } else {
          ErrorNotification(notification, 'Error ao logar o usuário', message);
          goToTodoPage();
        }
      },
    },
  );

  const handleFormSubmit = (values: SignInValidationType) => {
    mutation.mutate(values);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
