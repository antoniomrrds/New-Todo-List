import { useMutation } from 'react-query';
import { authApi } from '@/api/service/auth';
import { useAuth } from '@/context/auth';

type SignInProps = {
  navigateToSignIn: () => void;
};

export const useSignOut = ({ navigateToSignIn }: SignInProps) => {
  const { logout } = useAuth();

  const mutation = useMutation(() => authApi.signOut(), {
    onSuccess: () => {
      logout();
      navigateToSignIn();
    },
  });

  const handleFormSubmit = () => {
    mutation.mutate();
  };

  return { isSaving: mutation.isLoading, handleFormSubmit };
};
