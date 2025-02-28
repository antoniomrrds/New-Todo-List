import { useMutation, useQueryClient } from 'react-query';
import { SuccessNotification } from '@/components/shared/Notifications';
import { NotificationInstance } from 'antd/es/notification/interface';
import { TagApi } from '@/api/service/tag/tag-api';
import { CreateTag, UpdateTag } from '@/api/service/tag/types';
import { SaveTagValidationType } from '@/components/Tag/Save/Modal/validators';
import { FormattedError } from '@/api/core/error/types';
import { HandleError } from '@/components/shared/HandleError';

type SaveTagProps = {
  notification: NotificationInstance;
  onClose: () => void;
  refetch: () => void;
};
export const useSaveTag = ({
  notification,
  onClose,
  refetch,
}: SaveTagProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (data: CreateTag | UpdateTag) =>
      'id' in data ? TagApi.update(data) : TagApi.create(data),
    {
      onSuccess: (_, variables) => {
        processSuccessfulAction({
          notification,
          typeCreateOrUpdate: 'id' in variables ? 'atualizada' : 'criada',
        });

        onClose();

        // 🔥 Invalida todas as queries relacionadas às tags
        queryClient.invalidateQueries({
          queryKey: ['filteredTags'],
          exact: false,
        });

        if ('id' in variables) {
          queryClient.invalidateQueries({
            queryKey: ['tagDetails', variables.id],
          });
        }

        // 🔥 Refetch manual para garantir atualização
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

  const handleFormSubmit = (data: SaveTagValidationType) => {
    mutation.mutate({
      id: data.id,
      name: data.name,
      description: data.description,
      active: data.isActive,
    } as CreateTag | UpdateTag);
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
    `Tag ${typeCreateOrUpdate}`,
    `Tag ${typeCreateOrUpdate} com sucesso`,
  );
};
