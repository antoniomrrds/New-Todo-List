import { FormattedError } from '@/api/core/error/types';
import { CategoryApi } from '@/api/service/category/category-api';
import { Category } from '@/api/service/category/types';
import { HandleError } from '@/components/shared/HandleError';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const useQueryCategoryDetails = (
  id: number,
  notification: NotificationInstance,
) => {
  const {
    data: categoryItem,
    isLoading: isLoadingCategories,
    error: categoryError,
    refetch, // Permite chamar manualmente a atualização
  } = useQuery<Category, FormattedError>({
    queryKey: ['categoryDetails', id],
    queryFn: () => CategoryApi.details(id),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (categoryError) {
      HandleError({ error: categoryError, notification });
    }
  }, [categoryError, notification]);

  return { categoryItem, isLoadingCategories, categoryError, refetch };
};
