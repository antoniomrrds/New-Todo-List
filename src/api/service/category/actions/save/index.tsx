import { useMutation, useQueryClient } from 'react-query';
import { SuccessNotification } from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { FormattedError } from '@/api/core/error/types';
import { HandleError } from '@/components/shared/HandleError';
import { CategorySaveValidationType } from '@/components/Category/Save/Modal/validators';
import { CreateCategory, UpdateCategory } from '@/api/service/category/types';
import { CategoryApi } from '@/api/service/category/category-api';

type SaveCategoryProps = {
  notification: NotificationInstance;
  onClose: () => void;
  refetch: () => void;
  reset: () => void;
};
export const useSaveCategory = ({
  notification,
  onClose,
  refetch,
  reset,
}: SaveCategoryProps) => {
  const queryClient = useQueryClient();

  const mapFormDataSaveCatgory = (
    data: CategorySaveValidationType,
  ): CreateCategory | UpdateCategory => {
    const baseData = {
      active: data.isActive,
      name: data.name,
      description: data.description,
    };

    return data.id
      ? ({ ...baseData, id: data.id } as UpdateCategory)
      : (baseData as CreateCategory);
  };

  const mutation = useMutation(
    (data: CreateCategory | UpdateCategory) => {
      return 'id' in data ? CategoryApi.update(data) : CategoryApi.create(data);
    },
    {
      onSuccess: (_, variables) => {
        processSuccessfulAction({
          notification,
          typeCreateOrUpdate: 'id' in variables ? 'atualizada' : 'criada',
        });
        reset();
        onClose();

        queryClient.invalidateQueries({
          queryKey: ['filteredCategories'],
          exact: false,
        });

        if ('id' in variables) {
          queryClient.invalidateQueries({
            queryKey: ['filteredCategories', variables.id],
          });
        }

        refetch();
      },
      onError: (error: FormattedError) => {
        HandleError({
          error,
          notification,
        });
        onClose();
      },
    },
  );

  const handleFormSubmit = (data: CategorySaveValidationType) => {
    mutation.mutate(mapFormDataSaveCatgory(data));
  };

  return { isSaving: mutation.isLoading, handleFormSubmit };
};

type processSuccessfulActionProps = {
  notification: NotificationInstance;
  typeCreateOrUpdate: string;
};
const processSuccessfulAction = ({
  notification,
  typeCreateOrUpdate,
}: processSuccessfulActionProps) => {
  SuccessNotification(
    notification,
    `Categoria ${typeCreateOrUpdate}`,
    `Categoria ${typeCreateOrUpdate} com sucesso`,
  );
};
