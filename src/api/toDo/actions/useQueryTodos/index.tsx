import { todoApi } from "@/api/toDo";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { ToDo } from "@/api/toDo/types";

export const useQueryTodos = () => {
    const { data: toDos = [], isLoading: isLoadingToDos, error: errorToDos } = useQuery<ToDo[], AxiosError>("todos", todoApi.getAll);
    return { toDos, isLoadingToDos, errorToDos };
}
