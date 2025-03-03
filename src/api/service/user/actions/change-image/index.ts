import { UserApi } from '@/api/service/user';
import { UserChangeImageRequestDTO } from '@/api/service/user/types';
import { useAuth } from '@/context/auth';
import { setCookie } from '@/utils';
import { useMutation } from 'react-query';

export const useChangeImage = () => {
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
        }
      },
    },
  );

  const handleFormSubmit = (data: UserChangeImageRequestDTO) => {
    mutation.mutate(data);
  };
  return { isSaving: mutation.isLoading, handleFormSubmit };
};
