import { Switch } from 'antd';
import {
  Controller,
  FieldValues,
  Control,
  Path,
  FieldErrors,
} from 'react-hook-form';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import * as S from '@/components/shared/Form/form-styles';
import { FieldError, getValidateStatus } from '@/components/shared/Form';

type SwitchFieldProps<T extends FieldValues, V = boolean | number> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  tooltip?: string;
  FormItemStyled?: React.ElementType;
  checkedValue?: V;
  uncheckedValue?: V;
};

export const SwitchFieldCustom = <T extends FieldValues, V = boolean | number>({
  label,
  name,
  control,
  errors,
  tooltip,
  FormItemStyled = S.FormItem,
  checkedValue = true as V,
  uncheckedValue = false as V,
}: SwitchFieldProps<T, V>) => {
  return (
    <FormItemStyled
      label={label}
      name={name}
      valuePropName="checked"
      tooltip={tooltip}
      validateStatus={getValidateStatus(name, errors)}
      help={errors[name] ? <FieldError name={name} errors={errors} /> : null}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Switch
            {...field}
            defaultChecked={field.value === checkedValue}
            checked={field.value === checkedValue}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={(checked: boolean) =>
              field.onChange(checked ? checkedValue : uncheckedValue)
            }
          />
        )}
      />
    </FormItemStyled>
  );
};
