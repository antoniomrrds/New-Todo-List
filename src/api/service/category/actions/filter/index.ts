import { CategoryApi } from '@/api/service/category/category-api';
import {
  CategoryFilter,
  FilteredCategoryResponse,
} from '@/api/service/category/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
export const useQueryFilteredCategories = (filter: CategoryFilter) => {
  const {
    data: dataCategory,
    isLoading: isLoadingCategory,
    error: categoryError,
    refetch,
  } = useQuery<FilteredCategoryResponse, AxiosError>({
    queryKey: ['filteredCategories', filter],
    queryFn: () => CategoryApi.doFilter(filter),
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });

  return { dataCategory, isLoadingCategory, categoryError, refetch };
};
