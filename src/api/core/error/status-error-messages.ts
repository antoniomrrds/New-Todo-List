import { HttpStatusCode } from '@/api/http/http-status';
import {
  AUTH_ERROR_MESSAGES,
  GENERIC_ERROR_MESSAGES,
  HTTP_ERROR_MESSAGES,
  NETWORK_ERROR_MESSAGES,
} from '@/api/core/error/error-messages';

export const STATUS_ERROR_MESSAGES: { [key in HttpStatusCode]: string } = {
  [HttpStatusCode.BAD_REQUEST]: HTTP_ERROR_MESSAGES.badRequest,
  [HttpStatusCode.UNAUTHORIZED]: AUTH_ERROR_MESSAGES.unauthorized,
  [HttpStatusCode.FORBIDDEN]: AUTH_ERROR_MESSAGES.forbiddenError,
  [HttpStatusCode.NOT_FOUND]: HTTP_ERROR_MESSAGES.notFound,
  [HttpStatusCode.SERVER_ERROR]: HTTP_ERROR_MESSAGES.serverError,
  [HttpStatusCode.SERVICE_UNAVAILABLE]: HTTP_ERROR_MESSAGES.serverError,
  [HttpStatusCode.REQUEST_TIMEOUT]: NETWORK_ERROR_MESSAGES.timeoutError,
};

// Mapeamento para erros genéricos e de rede (fora dos códigos HTTP)
export const NETWORK_ERROR_MESSAGES_CUSTOM = {
  networkError: NETWORK_ERROR_MESSAGES.networkError, // Para problemas de rede
  defaultError: GENERIC_ERROR_MESSAGES.genericError, // Para erro genérico
};
