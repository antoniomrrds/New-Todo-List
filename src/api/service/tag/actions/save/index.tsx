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
  reset: () => void;
};
export const useSaveTag = ({
  notification,
  onClose,
  refetch,
  reset,
}: SaveTagProps) => {
  const queryClient = useQueryClient();

  const mapFormDataSaveTag = (
    data: SaveTagValidationType,
  ): CreateTag | UpdateTag => {
    const baseData = {
      active: data.isActive,
      name: data.name,
      description: data.description,
    };

    return data.id
      ? ({ ...baseData, id: data.id } as UpdateTag)
      : (baseData as CreateTag);
  };

  const mutation = useMutation(
    (data: CreateTag | UpdateTag) => {
      return 'id' in data ? TagApi.update(data) : TagApi.create(data);
    },
    {
      onSuccess: (_, variables) => {
        processSuccessfulAction({
          notification,
          typeCreateOrUpdate: 'id' in variables ? 'atualizada' : 'criada',
        });
        reset();
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
    mutation.mutate(mapFormDataSaveTag(data));
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
