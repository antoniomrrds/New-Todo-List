import { FormattedError } from '@/api/core/error/types';
import { UserApi } from '@/api/service/user';
import { UserChangeImageRequestDTO } from '@/api/service/user/types';
import { useAuth } from '@/context/auth';
import { setCookie } from '@/utils';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useMutation } from 'react-query';
import { HttpStatusCode } from '@/api/http/http-status';
import { ErrorNotification } from '@/components/shared/Notifications/ErrorNotification';
// import { getBase64 } from '@/utils/transform-image';

type ChangeImageProps = {
  notification: NotificationInstance;
  setImageSrc: (src: string) => void;
};

export const useChangeImage = ({
  notification,
  setImageSrc,
}: ChangeImageProps) => {
  const { setUser, user } = useAuth(); // Obtém a função setUser e os dados do usuário atual

  const mutation = useMutation(
    (data: UserChangeImageRequestDTO) => UserApi.changeImage(data),
    {
      onSuccess: (data) => {
        // Atualiza os dados do usuário no contexto global
        if (user) {
          const updatedUser = { ...user, urlImage: data.urlImage };
          setUser(updatedUser);
          // Atualizar o cookie
          setCookie(
            'sessionData',
            JSON.stringify({
              Name: updatedUser?.Name,
              Email: updatedUser?.Email,
              Roles: updatedUser?.Roles,
              UrlImage: updatedUser?.urlImage,
            }),
            10, // Garante que o cookie persista por 10 dias
          );
          // const base64 = await getBase64(file);

          setImageSrc(data.UrlImage);
        }
      },
      onError: (error: FormattedError) => {
        const { originalError, message, status, messageErrors } = error;
        if (status === HttpStatusCode.BAD_REQUEST) {
          const data = originalError.response?.data;
          const messageError = data?.message || message;
          ErrorNotification(notification, messageError, messageErrors);
        } else if (status === HttpStatusCode.NOT_FOUND) {
          // const data = originalError.response?.data;
          const messageError = 'Erro ao processar a imagem.';
          ErrorNotification(notification, messageError);
        } else {
          ErrorNotification(notification, message);
        }
      },
    },
  );

  const handleFormSubmit = (data: UserChangeImageRequestDTO) => {
    mutation.mutate(data);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
