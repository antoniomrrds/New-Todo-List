import { Switch } from 'antd';
import { Controller, FieldValues, Control, Path, FieldErrors } from 'react-hook-form';
import { CheckOutlined, CloseOutlined, WarningOutlined } from '@ant-design/icons';
import * as S from '@/components/shared/Form/form-styles';

interface SwitchFieldProps<T extends FieldValues> {
    label: string;
    name: Path<T>; // Utilizando o tipo Path para garantir que o nome seja uma chave do formulário
    control: Control<T>; // Tipo Control genérico para aceitar qualquer tipo de controle de formulário
    tooltip?: string;
    errors:  FieldErrors<T>; 
    FormItemComponent?: React.ElementType;
    SwitchComponent?: React.ElementType;
    defaultChecked?: boolean;
}

const SwitchFieldCustom = <T extends FieldValues>({
    label,
    name,
    control,
    tooltip,
    errors,
    defaultChecked = false,
    FormItemComponent = S.FormItem,
    SwitchComponent = Switch,
}: SwitchFieldProps<T>) => {
    return (
        <FormItemComponent
            label={label}
            name={name}
            valuePropName="checked"
            tooltip={tooltip}
            validateStatus={errors[name] ? "error" : undefined}
            help={errors[name] && (
                <span>
                    <WarningOutlined style={{ color: 'red', marginRight: 5 }} />
                    {errors[name]?.message  as React.ReactNode  || ""}
                </span> 
            )}
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <SwitchComponent
                        {...field}
                        defaultChecked={defaultChecked}
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={(checked: boolean) => field.onChange(checked)}
                    />
                )}
            />
        </FormItemComponent>
    );
};

export default SwitchFieldCustom;
