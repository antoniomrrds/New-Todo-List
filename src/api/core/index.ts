import { handleApiError } from "@/api/error";
import { ApiErrorResponse } from "@/api/error/types";
import { AxiosError } from "axios";

export const handleRequest = async <T>(request: Promise<T>): Promise<T> => {
  try {
    return await request;
  } catch (error) {
    const formattedError = handleApiError(error as AxiosError<ApiErrorResponse>);
    throw formattedError;
  }
};