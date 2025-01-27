import { Input } from 'antd';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
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
  allowClear?: boolean;
}

export const FormInputCustom = <T extends FieldValues>({
  name,
  control,
  label,
  maxLength,
  placeholder,
  required = false,
  errors,
  allowClear,
  FormItemStyled = S.FormItem,
}: FormInputProps<T>) => (
  <FormItemStyled
    label={label}
    name={name}
    required={required}
    hasFeedback
    messageVariables={{ label }}
    validateStatus={getValidateStatus(name, errors)}
    help={errors[name] ? <FieldError name={name} errors={errors} /> : null}
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
          allowClear={allowClear}
          maxLength={maxLength}
        />
      )}
    />
  </FormItemStyled>
);
