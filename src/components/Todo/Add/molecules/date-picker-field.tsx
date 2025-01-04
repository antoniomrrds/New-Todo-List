import { DatePickerCustom } from "@/components/shared/Form";
import { CreateTodoFieldPropsWithoutName } from "@/components/Todo/Add/types";

type DatePickerFieldProps = CreateTodoFieldPropsWithoutName;
export const DatePickerField = ({
control,
errors
}:DatePickerFieldProps) => ( 
  <DatePickerCustom
  name="expirationDate"
  label="Data de Expiração"
  control={control}
  errors={errors}
/>
)