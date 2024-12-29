import { handleApiError } from "@/api/error";
import { ApiErrorResponse, ApiResponse } from "@/api/error/types";
import { AxiosError } from "axios";

  export const requestWrapper = async <T>(requestFn: () => Promise<T>): Promise<ApiResponse<T>> => {
    try {
      const data = await requestFn();
      return { success: true, data };
    } catch (error) {
      const formattedError = handleApiError(error as  AxiosError<ApiErrorResponse>);
      throw formattedError;
    }
  };