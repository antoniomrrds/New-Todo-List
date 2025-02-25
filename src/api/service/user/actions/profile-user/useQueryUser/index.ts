import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { UserApi } from '@/api/service/user';
import { UserWithoutPassWord } from '@/api/service/user/types';

export const useQueryUserWithoutPassword = () => {
  const {
    data: user,
    isLoading: isLoadingUser,
    error: userDataError,
  } = useQuery<UserWithoutPassWord, AxiosError>('user', UserApi.getUser, {
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });
  return { user, isLoadingUser, userDataError };
};
