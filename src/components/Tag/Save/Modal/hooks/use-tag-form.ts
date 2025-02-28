import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ActivationState } from '@/api/core/types';
import {
  SaveTagValidationType,
  tagValidationSchema,
} from '@/components/Tag/Save/Modal/validators';
import { Tag } from '@/api/service/tag/types';

type UseTagFormProps = {
  tagItem?: Tag | null;
};

export const useTagForm = ({ tagItem }: UseTagFormProps) => {
  const defaultValuesForCreation = {
    isActive: ActivationState.Active,
  };

  const defaultValuesForEdit = {
    id: tagItem?.id || null,
    isActive: tagItem?.active,
    name: tagItem?.name || '',
    description: tagItem?.description || '',
  };

  const defaultValues = tagItem
    ? defaultValuesForEdit
    : defaultValuesForCreation;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SaveTagValidationType>({
    resolver: yupResolver(tagValidationSchema),
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
