import { categoryApi } from '@/api/service/category';
import { Category } from '@/api/service/category/types';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

export const useQueryCategories = () => {
  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery<Category[], AxiosError>('categories', categoryApi.getAll, {
    refetchOnWindowFocus: false, //- Indica se deve refazer a busca ao focar na janela.
    // keepPreviousData: true, // Indica se deve manter os dados anteriores enquanto novos dados são carregados.
  });
  return { categories, isLoadingCategories, errorCategories };
};
