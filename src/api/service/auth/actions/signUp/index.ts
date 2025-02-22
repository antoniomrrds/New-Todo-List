import { useMutation } from 'react-query';
import { authApi, SignUp } from '@/api/service/auth';
import {
  ErrorNotification,
  SuccessNotification,
} from '@/components/shared/Notifications';
import { ErrorCodes } from '@/api/error/error-codes';
import { NotificationInstance } from 'antd/es/notification/interface';
import { FormattedError } from '@/api/error/types';
import { SignUpValidationType } from '@/components/Auth/SignUp/Validation';
type SignUpProps = {
  notification: NotificationInstance;
  navigateToSignIn: () => void;
};

export const useSignUp = ({ navigateToSignIn, notification }: SignUpProps) => {
  const mutation = useMutation(
    (signUpData: SignUp) => authApi.signUp(signUpData),
    {
      onSuccess: () => {
        SuccessNotification(
          notification,
          `Usuário cadastrado com sucesso`,
          `O usuário foi cadastrado com sucesso`,
        );
        navigateToSignIn();
      },
      onError: (error: FormattedError) => {
        const { errors, status, message } = error;
        if (status === ErrorCodes.BAD_REQUEST) {
          ErrorNotification(
            notification,
            `Error ao cadastrar usuário`,
            message,
            errors,
          );
        } else {
          ErrorNotification(notification, `Erro ao cadastrar usuário`, message);
          navigateToSignIn();
        }
        console.error('Erro no cadastro', error);
      },
    },
  );

  const handleFormSubmit = (values: SignUpValidationType) => {
    mutation.mutate(values);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
