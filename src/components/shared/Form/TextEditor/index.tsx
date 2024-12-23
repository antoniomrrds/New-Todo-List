import { Control, Controller, FieldErrors, FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import * as S from '@/components/shared/Form/form-styles';
import { FieldError, getValidateStatus } from '@/components/shared/Form';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  maxLength?: number;
  placeholder: string;
  required?: boolean;
  FormItemStyled?: React.ElementType;
  errors: FieldErrors<T>;
  setValue: UseFormSetValue<T>
}

export const TextEditorCustom = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  required = false,
  errors,
  FormItemStyled = S.FormItem,
  setValue
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
        <ReactQuill
          {...field}
          id={name}
          onChange={(value) => setValue(name, value as PathValue<T, Path<T>>)}
          placeholder={placeholder}
          value={field.value || ''}
        />
      )}
    />
  </FormItemStyled>
);

