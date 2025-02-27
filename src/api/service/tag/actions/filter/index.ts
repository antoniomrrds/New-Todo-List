import { TagApi } from '@/api/service/tag/tag-api';
import { FilteredTagResponse, TagFilter } from '@/api/service/tag/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
export const useQueryFilteredTags = (filter: TagFilter) => {
  const {
    data: dataTags,
    isLoading: isLoadingTags,
    error: errorTags,
    refetch,
  } = useQuery<FilteredTagResponse, AxiosError>({
    queryKey: ['filteredTags', filter],
    queryFn: () => TagApi.doFilter(filter),
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });

  return { dataTags, isLoadingTags, errorTags, refetch };
};
