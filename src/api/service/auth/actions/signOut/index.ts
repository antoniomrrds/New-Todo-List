import { useMutation } from 'react-query';
import { authApi } from '@/api/service/auth';
import { ErrorNotification } from '@/components/shared/Notifications';
import { ErrorCodes } from '@/api/error/error-codes';
import { NotificationInstance } from 'antd/es/notification/interface';
import { FormattedError } from '@/api/error/types';
import { useAuth } from '@/context/auth';

type SignInProps = {
  notification: NotificationInstance;
  navigateToSignIn: () => void;
};

export const useSignOut = ({ navigateToSignIn, notification }: SignInProps) => {
  const { logout } = useAuth();

  const mutation = useMutation(() => authApi.signOut(), {
    onSuccess: () => {
      logout();
      navigateToSignIn();
    },
    onError: (error: FormattedError) => {
      const { errors, status } = error;

      if (status === ErrorCodes.BAD_REQUEST) {
        ErrorNotification(
          notification,
          'Erro ao tentar realizar logout',
          'Houve um problema ao processar sua solicitação de logout. Tente novamente mais tarde.',
          errors,
        );
      } else if (status === ErrorCodes.UNAUTHORIZED) {
        ErrorNotification(
          notification,
          'Sessão expirada',
          'Sua sessão expirou. Por favor, faça login novamente.',
        );
      } else {
        ErrorNotification(
          notification,
          'Erro ao realizar logout',
          'Ocorreu um erro inesperado ao tentar realizar logout. Tente novamente mais tarde.',
        );
      }
    },
  });

  const handleFormSubmit = () => {
    mutation.mutate();
  };

  return { isSaving: mutation.isLoading, handleFormSubmit };
};
