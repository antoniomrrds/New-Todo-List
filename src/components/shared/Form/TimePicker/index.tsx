import React from "react";
import { Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form";
import dayjs from "dayjs";
import { FieldError, getValidateStatus } from '@/components/shared/Form';
import * as S from '@/components/shared/Form/form-styles';
import { TimePicker } from "antd";


interface TimePickerFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  FormItemStyled?: React.ElementType;
  onChange?: (date: dayjs.Dayjs | null) => void;
}

export const TimePickerCustom = <T extends FieldValues> ({ 
    name,
    label,
    control, 
    errors, 
    onChange,
    FormItemStyled = S.FormItem,
}: TimePickerFieldProps<T>) => (
  <FormItemStyled
    label={label}
    name={name}
    validateStatus={getValidateStatus(name, errors)}
    help={ errors[name] ? <FieldError name={name} errors={errors} /> : null}
  >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TimePicker
          {...field}
          id={name}
          placeholder={`Selecione ${label.toLowerCase()}`}
          format="HH:mm:ss"
          defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
          value={field.value ? dayjs(field.value, "HH:mm:ss") : null}
          onChange={(date) => {
            field.onChange(date);
            if (onChange) {
              onChange(date);
            }
          }}
          style={{ width: "100%" }}
          allowClear
        />
      )}
    />
  </FormItemStyled>
);

