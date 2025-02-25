import { AxiosError } from 'axios';
import { ApiErrorResponse, FormattedError } from '@/api/error/types';
import { handleBadRequestError } from '@/api/error/handle-errors';
import { ErrorCodes } from '@/api/error/error-codes';
import {
  NETWORK_ERROR_MESSAGES_CUSTOM,
  STATUS_ERROR_MESSAGES,
} from '@/api/error/status-error-messages';

// Função para tratar os erros da API
export const handleApiError = (
  error: AxiosError<ApiErrorResponse>,
  customMessage?: string,
): FormattedError => {
  let errorMessage =
    customMessage || NETWORK_ERROR_MESSAGES_CUSTOM.defaultError;
  let errorDetails: string[] = [];

  // Verificando se a resposta foi recebida
  if (error.response) {
    const { status, data } = error.response;
    const errorCode = status as ErrorCodes;

    // Usando o enum para obter a mensagem correspondente ao código de erro
    errorMessage =
      STATUS_ERROR_MESSAGES[errorCode] ||
      NETWORK_ERROR_MESSAGES_CUSTOM.defaultError;
    // Caso o erro seja 400 (Bad Request), podemos tratar erros detalhados
    if (errorCode === ErrorCodes.BAD_REQUEST && data?.errors) {
      errorMessage = data.message || errorMessage;
      errorDetails = handleBadRequestError(data, errorDetails);
    }
  }

  // Caso haja problemas na requisição mas não tenha resposta do servidor (erro de rede)
  else if (error.request) {
    errorMessage = NETWORK_ERROR_MESSAGES_CUSTOM.networkError; // Usando a mensagem de erro de rede
  } else {
    errorMessage = NETWORK_ERROR_MESSAGES_CUSTOM.defaultError; // Usando a mensagem de erro genérico
  }
  return {
    originalError: error,
    message: errorMessage,
    errors: errorDetails,
    status: error.response?.status,
  };
};
