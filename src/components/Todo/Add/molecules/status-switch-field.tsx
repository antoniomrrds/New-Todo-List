import { FieldError, getValidateStatus } from "@/components/shared/Form";
import * as S from "@/components/shared/Form/form-styles";
import { TodoStatus } from "@/components/Todo/Add/enum";
import { StatusSwitchFieldProps } from "@/components/Todo/Add/organisms/TitleAndStatus/types";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { Switch } from "antd";

import {
  Controller,
  FieldValues,
} from "react-hook-form";

export const StatusSwitchField = <T extends FieldValues>({
  control,
  name,
  errors,
}: StatusSwitchFieldProps<T>) => (
  <S.FormItem
    label="Ativo"
    name={name}
    valuePropName="checked"
    validateStatus={getValidateStatus(name, errors)}
    help={errors[name] ? <FieldError name={name} errors={errors} /> : null}
    tooltip="Marque como Ativo para poder mostrar na busca default."
    >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch
          {...field}
          defaultChecked={field.value === TodoStatus.Active}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          onChange={(checked: boolean) =>
            checked ? TodoStatus.Active : TodoStatus.Inactive
          }
        />
      )}
    />
  </S.FormItem>
);
