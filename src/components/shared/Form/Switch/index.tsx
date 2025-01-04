import { Switch } from 'antd';
import { Controller, FieldValues, Control, Path, FieldErrors } from 'react-hook-form';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import * as S from '@/components/shared/Form/form-styles';
import { FieldError, getValidateStatus } from '@/components/shared/Form';

interface SwitchFieldProps<T extends FieldValues> {
    label: string;
    name: Path<T>; 
    control: Control<T>; 
    tooltip?: string;
    errors:  FieldErrors<T>; 
    FormItemStyled?: React.ElementType;
    defaultChecked?: boolean;
}

export const SwitchFieldCustom = <T extends FieldValues>({
    label,
    name,
    control,
    tooltip,
    errors,
    defaultChecked = false,
    FormItemStyled = S.FormItem,
}: SwitchFieldProps<T>) => {
    return (
        <FormItemStyled
            label={label}
            name={name}
            valuePropName="checked"
            tooltip={tooltip}
            validateStatus={getValidateStatus(name, errors)}
            help={ errors[name] ? <FieldError name={name} errors={errors} /> : null}
            >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Switch
                        {...field}
                        defaultChecked={defaultChecked}
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={(checked: boolean) => field.onChange(checked)} 
                    />
                )}
            />
        </FormItemStyled>
    );
};

