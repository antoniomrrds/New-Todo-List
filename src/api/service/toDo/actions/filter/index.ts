import { todoApi } from '@/api/service/toDo/todo-api';
import { FilteredToDoResponse, ToDoFilter } from '@/api/service/toDo/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
export const useQueryFilteredTodos = (filter: ToDoFilter) => {
  const {
    data: dataToDos,
    isLoading: isLoadingToDos,
    error: errorToDos,
  } = useQuery<FilteredToDoResponse, AxiosError>({
    queryKey: ['filteredTodos', filter],
    queryFn: () => todoApi.doFilter(filter),
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });

  return { dataToDos, isLoadingToDos, errorToDos };
};
