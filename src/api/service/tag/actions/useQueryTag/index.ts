import { TagApi } from '@/api/service/tag/tag-api';
import { Tag } from '@/api/service/tag/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

export const useQueryTags = () => {
  const {
    data: tags = [],
    isLoading: isLoadingTags,
    error: errorTags,
  } = useQuery<Tag[], AxiosError>('tags', TagApi.getAll, {
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });

  return { tags, isLoadingTags, errorTags };
};
