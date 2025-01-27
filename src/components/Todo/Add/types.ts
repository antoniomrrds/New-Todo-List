import { CreateTodoValidationType } from '@/components/Todo/Add/validators';
import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
  UseFormSetValue,
} from 'react-hook-form';
import { Category } from '@/api/service/category/types';
import { Tag } from '@/api/service/tag/types';
export type BaseControlAndErrorsProps<T extends FieldValues> = {
  control: Control<T>;
  errors: FieldErrors<T>;
};

export type FieldPropsWithoutName<T extends FieldValues> =
  BaseControlAndErrorsProps<T>;

export type NamedFieldProps<T extends FieldValues> =
  BaseControlAndErrorsProps<T> & {
    name: Path<T>;
  };
export type SetValueProps<T extends FieldValues> = {
  setValue: UseFormSetValue<T>;
};
export type SetValuesFieldProps<T extends FieldValues> =
  BaseControlAndErrorsProps<T> & SetValueProps<T>;
export type WithCategories = { categories: Category[] };
export type WithTags = { tags: Tag[] };

export type CreateTodoFieldProps =
  FieldPropsWithoutName<CreateTodoValidationType>;

export type CreateTodoFieldWithSetValuesProps =
  SetValuesFieldProps<CreateTodoValidationType>;

export type CreateTodoFieldPropsWithoutName =
  FieldPropsWithoutName<CreateTodoValidationType>;
