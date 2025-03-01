import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ActivationState } from '@/api/core/types';
import { Category } from '@/api/service/category/types';
import {
  CategorySaveValidationType,
  categoryValidationSchema,
} from '@/components/Category/Save/Modal/validators';

type CategoryFormProps = {
  categoryItem?: Category | null;
};

export const useCategoryForm = ({ categoryItem }: CategoryFormProps) => {
  const defaultValuesForCreation = {
    isActive: ActivationState.Active,
  };

  const defaultValuesForEdit = {
    id: categoryItem?.id || null,
    isActive: categoryItem?.active,
    name: categoryItem?.name || '',
    description: categoryItem?.description || '',
  };

  const defaultValues = categoryItem
    ? defaultValuesForEdit
    : defaultValuesForCreation;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategorySaveValidationType>({
    resolver: yupResolver(categoryValidationSchema),
    mode: 'onChange',
    defaultValues,
  });

  return {
    control,
    handleSubmit,
    reset,
    errors,
  };
};
