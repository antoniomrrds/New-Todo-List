import { useMutation } from "react-query";
import { CreateToDo } from "@/api/service/toDo/types";
import { todoApi } from "@/api/service/toDo";
import { FormattedError } from "@/api/error/types";
import { AxiosResponse } from "axios";

type CreateToDoMutation = {
  onSuccess?: (response: AxiosResponse) => void;
  onError?: (error: FormattedError) => void;
};
export const useCreateToDoMutation = ({
  onError,
  onSuccess,
}: CreateToDoMutation) =>
  useMutation((newToDo: CreateToDo) => todoApi.create(newToDo), {
    onSuccess,
    onError,
  });
