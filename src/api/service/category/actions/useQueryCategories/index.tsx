import { FormattedError } from '@/api/error/types';
import { categoryApi } from '@/api/service/category';
import { Category } from '@/api/service/category/types';
import { useQuery } from 'react-query';

export const useQueryCategories = () => {
  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery<Category[], FormattedError>('categories', categoryApi.getAll);
  return { categories , isLoadingCategories, errorCategories };
};
