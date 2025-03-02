import { todoApi } from '@/api/service/toDo';
import { useQuery } from 'react-query';
import { ToDoDetails } from '@/api/service/toDo/types';
import { HandleError } from '@/components/shared/HandleError';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useEffect } from 'react';
import { FormattedError } from '@/api/core/error/types';

export const useQueryTodoDetails = (
  id: number,
  notification: NotificationInstance,
) => {
  const {
    data: toDoItem,
    isLoading: isLoadingToDos,
    error: errorToDo,
    refetch,
  } = useQuery<ToDoDetails, FormattedError>({
    queryKey: ['todoDetails', id],
    queryFn: () => todoApi.details(id),
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });

  useEffect(() => {
    if (errorToDo) {
      HandleError({ error: errorToDo, notification });
    }
  }, [errorToDo, notification]);

  return { toDoItem, isLoadingToDos, errorToDo, refetch };
};
