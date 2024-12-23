import { Input } from 'antd';
import { Control, Controller, FieldErrors, FieldValues, Path } from 'react-hook-form';
import * as S from '@/components/shared/Form/form-styles';
import { FieldError, getValidateStatus } from '@/components/shared/Form';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  maxLength?: number;
  placeholder: string;
  required?: boolean;
  FormItemStyled?: React.ElementType;
  errors: FieldErrors<T>;
}

export const FormInputCustom = <T extends FieldValues>({
  name,
  control,
  label,
  maxLength,
  placeholder,
  required = false,
  errors,
  FormItemStyled = S.FormItem,
}: FormInputProps<T>) => (
  <FormItemStyled
    label={label}
    name={name}
    required={required}

    validateStatus={getValidateStatus(name, errors)}
    help={<FieldError name={name} errors={errors} />}
  >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          id={name}
          placeholder={placeholder}
          showCount
          maxLength={maxLength}
        />
      )}
    />
  </FormItemStyled>
);

