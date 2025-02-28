import { TagApi } from '@/api/service/tag/tag-api';
import { FilteredTagResponse, TagFilter } from '@/api/service/tag/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { useMemo } from 'react';

export const useQueryFilteredTags = (filter: TagFilter) => {
  const memoizedFilter = useMemo(() => filter, [JSON.stringify(filter)]);

  const {
    data: dataTags,
    isLoading: isLoadingTags,
    error: errorTags,
    refetch,
  } = useQuery<FilteredTagResponse, AxiosError>({
    queryKey: ['filteredTags', memoizedFilter],
    queryFn: () => TagApi.doFilter(memoizedFilter),
    refetchOnWindowFocus: false,
  });

  return { dataTags, isLoadingTags, errorTags, refetch };
};
