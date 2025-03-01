import { useMutation, useQueryClient } from 'react-query';
import { SuccessNotification } from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { CategoryApi } from '@/api/service/category/category-api';

type UseDeleteCategoryProps = {
  notification: NotificationInstance;
};

export const useDeleteCategory = ({ notification }: UseDeleteCategoryProps) => {
  const queryClient = useQueryClient();

  const { mutate: deleteCategory, isLoading: isDeletingCategory } = useMutation(
    (id: number) => CategoryApi.delete(id), // Chama a API para deletar o item
    {
      onSuccess: () => {
        SuccessNotification(
          notification,
          'categoria deletada',
          'A categoria foi deletada com sucesso',
        );

        // Invalida a query para atualizar a lista de tarefas
        queryClient.invalidateQueries({
          queryKey: ['filteredCategories'],
          exact: false,
        });
      },
    },
  );

  return { deleteCategory, isDeletingCategory };
};
