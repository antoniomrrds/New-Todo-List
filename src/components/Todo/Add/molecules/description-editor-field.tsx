import { TextEditorCustom } from '@/components/shared/Form';
import { CreateTodoFieldWithSetValuesProps } from '@/components/Todo/Add/types';

type DescriptionEditorFieldProps = CreateTodoFieldWithSetValuesProps;

export const DescriptionEditorField = ({
  control,
  errors,
  setValue,
}: DescriptionEditorFieldProps) => (
  <TextEditorCustom
    name="description"
    control={control}
    label="Descrição"
    placeholder="Digite a descrição aqui"
    required
    errors={errors}
    setValue={setValue}
  />
);
