import { TimePickerCustom } from "@/components/shared/Form";
import { CreateTodoFieldPropsWithoutName } from "@/components/Todo/Add/types";

type TimerPickerFieldProps = CreateTodoFieldPropsWithoutName

export const TimerPickerField = ({
  control,
  errors
}:TimerPickerFieldProps) => (
    <TimePickerCustom
      name="expirationTime"
      label="Hora de Expiração"
      control={control}
      errors={errors}
    />
);