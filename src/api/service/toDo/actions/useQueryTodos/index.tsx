import { todoApi } from '@/api/service/toDo';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ToDo } from '@/api/service/toDo/types';

export const useQueryTodos = () => {
  const {
    data: toDos = [],
    isLoading: isLoadingToDos,
    error: errorToDos,
  } = useQuery<ToDo[], AxiosError>('todos', todoApi.getAll, {
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });
  return { toDos, isLoadingToDos, errorToDos };
};
