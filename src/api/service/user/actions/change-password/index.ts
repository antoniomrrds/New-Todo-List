import { UserApi } from '@/api/service/user';
import { ChangePasswordValidationType } from '@/components/Profile/ChangePassword/Validation';
import { SuccessNotification } from '@/components/shared/Notifications';
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
    },
  );

  const handleFormSubmit = ({ password }: ChangePasswordValidationType) => {
    mutation.mutate(password);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
