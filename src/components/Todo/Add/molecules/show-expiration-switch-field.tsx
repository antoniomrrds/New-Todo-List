import { SwitchFieldCustom } from '@/components/shared/Form';
import { IsCompletedSwitchProps } from '@/components/Todo/Add/organisms/ShowExpirationAndIsCompleted/types';
import { FieldValues } from 'react-hook-form';

export const ShowExpirationSwitchField = <T extends FieldValues>({
  control,
  name,
  errors,
}: IsCompletedSwitchProps<T>) => (
  <SwitchFieldCustom
    label="Mostrar Data de Expiração"
    name={name}
    control={control}
    errors={errors}
    tooltip="Selecione para exibir campos de data e hora de expiração"
  />
);
