// hooks/useCategoriesAndTags.ts
import { useQueryCategories } from '@/api/service/category/actions';
import { useQueryTags } from '@/api/service/tag/actions/useQueryTag';

export const useCategoriesAndTags = () => {
  const { categories, errorCategories, isLoadingCategories } =
    useQueryCategories();
  const { tags, errorTags, isLoadingTags } = useQueryTags();

  return {
    categories,
    tags,
    errorCategories,
    errorTags,
    isLoadingCategoriesAndTags: isLoadingCategories || isLoadingTags
  };
};
