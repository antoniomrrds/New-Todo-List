import { useMutation } from 'react-query';
import { authApi } from '@/api/service/auth';
import { useAuth } from '@/context/auth';
import { FormattedError } from '@/api/core/error/types';
import { NotificationInstance } from 'antd/es/notification/interface';
import { HandleError } from '@/components/shared/HandleError';

type SignInProps = {
  navigateToSignIn: () => void;
  notification: NotificationInstance;
};

export const useSignOut = ({ navigateToSignIn, notification }: SignInProps) => {
  const { logout } = useAuth();

  const mutation = useMutation(() => authApi.signOut(), {
    onSuccess: () => {
      logout();
      navigateToSignIn();
    },
    onError: (error: FormattedError) => {
      HandleError(error, notification);
    },
  });

  const handleFormSubmit = () => {
    mutation.mutate();
  };

  return { isSaving: mutation.isLoading, handleFormSubmit };
};
