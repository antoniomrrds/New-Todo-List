import { useMutation } from 'react-query';
import { authApi, SignUp } from '@/api/service/auth';
import { SuccessNotification } from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
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
    },
  );

  const handleFormSubmit = (values: SignUpValidationType) => {
    mutation.mutate(values);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
