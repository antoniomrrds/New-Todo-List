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
  } = useQuery<Tag, FormattedError>({
    queryKey: ['tagDetails', id],
    queryFn: () => TagApi.details(id),
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });
  useEffect(() => {
    if (errorTag) {
      HandleError({ error: errorTag, notification });
    }
  }, [errorTag, notification]);

  return { tagItem, isLoadingTags, errorTag };
};
