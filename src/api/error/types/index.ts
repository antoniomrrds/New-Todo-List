import { AxiosError } from "axios";

export type ApiErrorResponse = {
  success?: boolean;
  statusCode?: number;
  message?: string;
  errors?: { [key: string]: string[] };
}

export type FormattedError = {
  originalError: AxiosError<ApiErrorResponse>;
  message: string;
  errors: string[];
  status?: number;
}

