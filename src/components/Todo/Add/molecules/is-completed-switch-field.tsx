import { FieldError, getValidateStatus } from "@/components/shared/Form";

import { CompletionStatus } from "@/components/Todo/Add/enum";
import { IsCompletedSwitchProps } from "@/components/Todo/Add/organisms/ShowExpirationAndIsCompleted/types";

import * as S from "@/components/shared/Form/form-styles";

import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";

import {
  Controller,
  FieldValues,
} from "react-hook-form";

export const IsCompletedSwitchField = <T extends FieldValues>({
  control,
  name,
  errors,
}: IsCompletedSwitchProps<T>) => (
  <S.FormItem
  label="Esta concluído?"
  name={name}
    valuePropName="checked"
    validateStatus={getValidateStatus(name, errors)}
    help={errors[name] ? <FieldError name={name} errors={errors} /> : null}
    tooltip="Selecione para marcar a tarefa como concluída"
    >
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch
          {...field}
          defaultChecked={field.value === CompletionStatus.Completed}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          onChange={(checked: boolean) =>
            checked ? CompletionStatus.Completed : CompletionStatus.Incomplete
          }
        />
      )}
    />
  </S.FormItem>
);
