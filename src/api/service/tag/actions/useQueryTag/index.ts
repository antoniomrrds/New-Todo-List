import { FormattedError } from '@/api/error/types';
import { tagApi } from '@/api/service/tag/tag-api';
import { Tag } from '@/api/service/tag/types';
import { useQuery } from 'react-query';

export const useQueryTags = () => {
  const {
    data: tags = [],
    isLoading: isLoadingTags,
    error: errorTags,
  } = useQuery<Tag[], FormattedError>('tags', tagApi.getAll, {
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });

  return { tags, isLoadingTags, errorTags };
};
