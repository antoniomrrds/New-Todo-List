import { useMutation } from 'react-query';
import { authApi, SignIn } from '@/api/service/auth';
import { NotificationInstance } from 'antd/es/notification/interface';
import { SignInValidationType } from '@/components/Auth/SignIn/Validation';
import { useAuth } from '@/context/auth';
import { FormattedError } from '@/api/core/error/types';
import { ErrorNotificationSignin } from '@/components/Auth/notification/ErrorNotification';
import { HttpStatusCode } from '@/api/http/http-status';

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
      onError: ({
        message,
        status,
        messageErrors,
        originalError,
      }: FormattedError) => {
        setIsAuthenticated(false);

        if (status === HttpStatusCode.BAD_REQUEST) {
          const data = originalError.response?.data;
          const messageError = data?.message || message;
          ErrorNotificationSignin(notification, messageError, messageErrors);
        } else {
          ErrorNotificationSignin(notification, message);
        }
      },
    },
  );

  const handleFormSubmit = (values: SignInValidationType) => {
    mutation.mutate(values);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
