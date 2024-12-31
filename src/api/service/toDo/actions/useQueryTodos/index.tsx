import { todoApi } from "@/api/service/toDo";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ToDo } from "@/api/service/toDo/types";

export const useQueryTodos = () => {
  const {
    data: toDos = [],
    isLoading: isLoadingToDos,
    error: errorToDos,
  } = useQuery<ToDo[], AxiosError>("todos", todoApi.getAll);
  return { toDos, isLoadingToDos, errorToDos };
};
