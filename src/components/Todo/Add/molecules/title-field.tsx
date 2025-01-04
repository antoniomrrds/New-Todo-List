import { FormInputCustom } from "@/components/shared/Form";
import {  TitleType } from "@/components/Todo/Add/organisms/TitleAndStatus/types";

export const TitleField =  ({
  control,
  errors,
}:TitleType ) => (
  <FormInputCustom
    name="title"
    control={control}
    label="Título"
    maxLength={100}
    placeholder="Digite o título da tarefa"
    required
    errors={errors}
  />
);
