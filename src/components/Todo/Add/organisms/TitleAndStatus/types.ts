import { NamedFieldProps, CreateTodoFieldPropsWithoutName  } from "@/components/Todo/Add/types";
import { FieldValues } from "react-hook-form";

export type StatusSwitchFieldProps <T extends FieldValues> = NamedFieldProps<T>;

export type TitleType = CreateTodoFieldPropsWithoutName ;

export type TitleAndStatusType = CreateTodoFieldPropsWithoutName ;
