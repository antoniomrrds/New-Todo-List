import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { Select, SelectProps } from 'antd';
import { FieldError, getValidateStatus } from '@/components/shared/Form';
import * as S from '@/components/shared/Form/form-styles';

interface SelectFieldCustomProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  options: { id: string | number; name: string }[];
  placeholder: string;
  required?: boolean;
}

const sharedProps: SelectProps = {
  mode: 'multiple',
  style: { width: '100%' },
  placeholder: 'Select Item...',
  maxTagCount: 'responsive',
  allowClear: true,
};

export const SelectFieldCustom = <T extends FieldValues>({
  label,
  name,
  control,
  errors,
  options = [],
  placeholder,
  required = false,
}: SelectFieldCustomProps<T>) => (
  <S.FormItem
    label={label}
    name={name}
    required={required}
    validateStatus={getValidateStatus(name, errors)}
    help={errors[name] ? <FieldError name={name} errors={errors} /> : null}
  >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select {...field} {...sharedProps} placeholder={placeholder}>
          {options.map((option) => (
            <Select.Option key={option.id} value={option.id}>
              {option.name}
            </Select.Option>
          ))}
        </Select>
      )}
    />
  </S.FormItem>
);
