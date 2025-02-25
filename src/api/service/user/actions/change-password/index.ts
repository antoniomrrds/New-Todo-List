import { ErrorCodes } from '@/api/error/error-codes';
import { FormattedError } from '@/api/error/types';
import { UserApi } from '@/api/service/user';
import { ChangePasswordValidationType } from '@/components/Profile/ChangePassword/Validation';
import {
  ErrorNotification,
  SuccessNotification,
} from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useMutation } from 'react-query';

type ChangePasswordProps = {
  notification: NotificationInstance;
  reset: () => void;
};

export const useChangePassword = ({
  notification,
  reset,
}: ChangePasswordProps) => {
  const mutation = useMutation(
    (password: string) => UserApi.changePassword(password),
    {
      onSuccess: () => {
        SuccessNotification(
          notification,
          'Senha mudada com sucesso',
          'Sua senha foi mudada com sucesso!',
        );
        reset();
      },
      onError: (error: FormattedError) => {
        const { errors, status, message } = error;
        if (status === ErrorCodes.BAD_REQUEST) {
          ErrorNotification(
            notification,
            `Error ao mudar a senha`,
            message,
            errors,
          );
        } else {
          ErrorNotification(notification, 'Error ao mudar a senha', message);
        }
      },
    },
  );

  const handleFormSubmit = ({ password }: ChangePasswordValidationType) => {
    mutation.mutate(password);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
