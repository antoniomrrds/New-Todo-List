// DatePickerField.tsx
import React from "react";
import { Control, Controller, FieldErrors, FieldValues, Path } from "react-hook-form";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { WarningOutlined } from "@ant-design/icons";
import * as S from '@/components/shared/Form/form-styles';


interface DatePickerFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  FormItemStyled?: React.ElementType;
  onChange?: (date: dayjs.Dayjs | null) => void;
}

export const DatePickerField = <T extends FieldValues> ({ 
    name,
    label,
    control, 
    errors, 
    onChange,
    FormItemStyled = S.FormItem,
}: DatePickerFieldProps<T>) => (
  <FormItemStyled
    label={label}
    name={name}
    validateStatus={errors[name] ? "error" : undefined}
    help={errors[name] && (
      <span>
        <WarningOutlined style={{ color: "red", marginRight: 5 }} />
        {errors[name]?.message as React.ReactNode || ""}
      </span>
    )}
  >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          id={name}
          placeholder={`Selecione ${label.toLowerCase()}`}
          format="DD/MM/YYYY"
          value={field.value ? dayjs(field.value) : null}
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

