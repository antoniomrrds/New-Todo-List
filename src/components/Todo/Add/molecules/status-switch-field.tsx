import { ActivationState } from '@/api/service/toDo/enum';
import { SwitchFieldCustom } from '@/components/shared/Form';
import { StatusSwitchFieldProps } from '@/components/Todo/Add/organisms/TitleAndStatus/types';
import { FieldValues } from 'react-hook-form';

export const StatusSwitchField = <T extends FieldValues>({
  control,
  name,
  errors,
}: StatusSwitchFieldProps<T>) => (
  <SwitchFieldCustom
    label="Ativo"
    name={name}
    control={control}
    errors={errors}
    tooltip="Marque como Ativo para poder mostrar na busca default."
    checkedValue={ActivationState.Active}
    uncheckedValue={ActivationState.Inactive}
  />
);
