import {
  CreateTodoFieldPropsWithoutName,
  NamedFieldProps,
} from '@/components/Todo/Add/types';
import { FieldValues } from 'react-hook-form';

export type IsCompletedSwitchProps<T extends FieldValues> = NamedFieldProps<T>;

export type ShowExpirationAndIsCompletedProps = CreateTodoFieldPropsWithoutName;
