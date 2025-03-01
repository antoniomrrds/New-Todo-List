import { useQueryCategory } from '@/api/service/category/actions';
import { useQueryTags } from '@/api/service/tag/actions/useQueryTag';

export const useCategoriesAndTags = () => {
  const { categories, errorCategories, isLoadingCategories } =
    useQueryCategory();
  const { tags, errorTags, isLoadingTags } = useQueryTags();
  const categoriesOrDefault = categories || [];
  const tagsOrDefault = tags || [];

  return {
    categories: categoriesOrDefault,
    tags: tagsOrDefault,
    errorCategories,
    errorTags,
    isLoadingCategoriesAndTags: isLoadingCategories || isLoadingTags,
  };
};
