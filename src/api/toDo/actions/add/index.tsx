import { useMutation } from "react-query";
import { CreateToDo } from "@/api/toDo/types";
import { todoApi } from "@/api/toDo";
import {  FormattedError } from "@/api/error/types";

type CreateToDoMutation = {
    onSuccess?: (response) => void;
    onError?: (error: FormattedError) => void;
}
export const useCreateToDoMutation = ({ onError, onSuccess }: CreateToDoMutation = {}) => {
    
    return useMutation((newToDo: CreateToDo) => todoApi.create(newToDo), {
        onSuccess,
        onError
    });
};