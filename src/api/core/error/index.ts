import { AxiosError } from 'axios';
import {
  NETWORK_ERROR_MESSAGES_CUSTOM,
  STATUS_ERROR_MESSAGES,
} from '@/api/core/error/status-error-messages';
import { HttpStatusCode } from '@/api/http/http-status';
import { handleBadRequestError } from '@/api/core';

// Função para tratar os erros da API
export const handleApiError = (error: AxiosError, customMessage?: string) => {
  let errorMessage =
    customMessage || NETWORK_ERROR_MESSAGES_CUSTOM.defaultError;
  const messageErrors: string[] = [];

  // Verificando se a resposta foi recebida
  if (error.response) {
    const status = error.response.status as HttpStatusCode;
    const errorCode = status;

    // Usando o enum para obter a mensagem correspondente ao código de erro
    errorMessage =
      STATUS_ERROR_MESSAGES[errorCode] ||
      NETWORK_ERROR_MESSAGES_CUSTOM.defaultError;

    // Verificando o status diretamente
    if (status === HttpStatusCode.BAD_REQUEST) {
      handleBadRequestError(error?.response?.data || {}, messageErrors);
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
    status: error.response?.status || HttpStatusCode.SERVER_ERROR,
    messageErrors: messageErrors || [],
  };
};
