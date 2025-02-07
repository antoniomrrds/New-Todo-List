import { todoApi } from '@/api/service/toDo';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { ToDoDetails } from '@/api/service/toDo/types';

export const useQueryTodoDetails = (id: number) => {
  const {
    data: toDoItem,
    isLoading: isLoadingToDos,
    error: errorToDos,
  } = useQuery<ToDoDetails, AxiosError>({
    queryKey: ['todoDetails', id],
    queryFn: () => todoApi.details(id),
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });
  return { toDoItem, isLoadingToDos, errorToDos };
};
