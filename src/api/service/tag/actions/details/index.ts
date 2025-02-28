import { FormattedError } from '@/api/core/error/types';
import { TagApi } from '@/api/service/tag/tag-api';
import { Tag } from '@/api/service/tag/types';
import { HandleError } from '@/components/shared/HandleError';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const useQueryTagDetails = (
  id: number,
  notification: NotificationInstance,
) => {
  const {
    data: tagItem,
    isLoading: isLoadingTags,
    error: errorTag,
    refetch, // Permite chamar manualmente a atualização
  } = useQuery<Tag, FormattedError>({
    queryKey: ['tagDetails', id],
    queryFn: () => TagApi.details(id),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (errorTag) {
      HandleError({ error: errorTag, notification });
    }
  }, [errorTag, notification]);

  return { tagItem, isLoadingTags, errorTag, refetch };
};
