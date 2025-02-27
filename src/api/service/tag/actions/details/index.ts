import { FormattedError } from '@/api/core/error/types';
import { TagApi } from '@/api/service/tag/tag-api';
import { Tag } from '@/api/service/tag/types';
import { useQuery } from 'react-query';

export const useQueryTagDetails = (id: number) => {
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
  return { tagItem, isLoadingTags, errorTag };
};
