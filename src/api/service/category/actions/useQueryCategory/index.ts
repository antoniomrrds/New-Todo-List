import { CategoryApi } from '@/api/service/category/category-api';
import { Category } from '@/api/service/category/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

export const useQueryCategory = () => {
  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery<Category[], AxiosError>('tags', CategoryApi.getAll, {
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });

  return { categories, isLoadingCategories, errorCategories };
};
