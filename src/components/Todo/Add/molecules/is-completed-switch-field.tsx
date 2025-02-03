import { SwitchFieldCustom } from '@/components/shared/Form';

import { IsCompletedSwitchProps } from '@/components/Todo/Add/organisms/ShowExpirationAndIsCompleted/types';

import { FieldValues } from 'react-hook-form';
import { ActivationState } from '@/api/service/toDo/enum';

export const IsCompletedSwitchField = <T extends FieldValues>({
  control,
  name,
  errors,
}: IsCompletedSwitchProps<T>) => (
  <SwitchFieldCustom
    label="Esta concluído?"
    name={name}
    control={control}
    errors={errors}
    tooltip="Selecione para marcar a tarefa como concluída"
    checkedValue={ActivationState.Active}
    uncheckedValue={ActivationState.Inactive}
  />
);
