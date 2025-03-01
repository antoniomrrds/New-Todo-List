import { useMutation, useQueryClient } from 'react-query';
import { SuccessNotification } from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { TagApi } from '@/api/service/tag/tag-api';

type UseDeleteTagProps = {
  notification: NotificationInstance;
};

export const useDeleteTag = ({ notification }: UseDeleteTagProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteTag, isLoading: deleteTagIsLoading } = useMutation(
    (id: number) => TagApi.delete(id), // Chama a API para deletar o item
    {
      onSuccess: () => {
        SuccessNotification(
          notification,
          'Tag deletada',
          'A tag foi deletada com sucesso',
        );

        // Invalida a query para atualizar a lista de tarefas
        queryClient.invalidateQueries({
          queryKey: ['filteredTags'],
          exact: false,
        });
      },
    },
  );

  return { deleteTag, deleteTagIsLoading };
};
