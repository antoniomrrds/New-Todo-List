import { UpdateUserProfile } from '@/api/service/user/types';
import { UserApi } from '@/api/service/user/user-api';
import { SuccessNotification } from '@/components/shared/Notifications';
import { useAuth } from '@/context/auth';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';

const mapFormDataUpdateUser = (data: UpdateUserProfile): UpdateUserProfile => {
  return {
    name: data.name,
  };
};

type UserUpdateProps = {
  notification: NotificationInstance;
};

export const userUpdateUser = ({ notification }: UserUpdateProps) => {
  const { setUser, user } = useAuth(); // Obtém a função setUser e os dados do usuário atual

  const mutation = useMutation(
    (data: UpdateUserProfile) => UserApi.update(data),
    {
      onSuccess: (data) => {
        // Atualiza os dados do usuário no contexto global
        if (user) {
          const updatedUser = { ...user, Name: data.name };
          setUser(updatedUser);

          // Atualizar o cookie
          Cookies.set('sessionData', JSON.stringify(updatedUser), {
            expires: 10,
          });
        }

        SuccessNotification(
          notification,
          'Usuário atualizado com sucesso',
          'Os dados do usuário foram atualizados com sucesso',
        );
      },
    },
  );

  const handleFormSubmit = async (data: UpdateUserProfile) => {
    await mutation.mutateAsync(mapFormDataUpdateUser(data));
  };

  return { isUpdating: mutation.isLoading, handleFormSubmit };
};
