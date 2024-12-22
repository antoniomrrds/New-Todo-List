// FormInput.tsx
import { Input } from 'antd';
import { Control, Controller, FieldErrors, FieldValues, Path } from 'react-hook-form';
import { WarningOutlined } from '@ant-design/icons';
import * as S from '@/components/shared/Form/form-styles';


interface FormInputProps <T extends FieldValues>  {
  name: Path<T>;
  control: Control<T>;
  label: string;
  maxLength?: number;
  placeholder: string;
  required?: boolean;
  errors: FieldErrors<T>; 
}

const FormInput = <T extends FieldValues> ({ name, control, label, maxLength, placeholder, required, errors }: FormInputProps<T>) => (
  <S.FormItem
    label={label}
    name={name}
    required={required}
    validateStatus={errors[name] ? "error" : undefined}
    help={errors[name] && (
      <span>
        <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
        {errors[name]?.message as React.ReactNode || ""}
      </span>
    )}
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
  </S.FormItem>
);

export default FormInput;
