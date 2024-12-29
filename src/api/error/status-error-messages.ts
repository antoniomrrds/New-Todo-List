import { ErrorCodes } from "@/api/error/error-codes";
import { AUTH_ERROR_MESSAGES, GENERIC_ERROR_MESSAGES, HTTP_ERROR_MESSAGES, NETWORK_ERROR_MESSAGES } from "@/api/error/error-messages";


export const STATUS_ERROR_MESSAGES: { [key in ErrorCodes]: string } = {
  [ErrorCodes.BAD_REQUEST]: HTTP_ERROR_MESSAGES.badRequest,
  [ErrorCodes.UNAUTHORIZED]: AUTH_ERROR_MESSAGES.unauthorized,
  [ErrorCodes.FORBIDDEN]: AUTH_ERROR_MESSAGES.forbiddenError,
  [ErrorCodes.NOT_FOUND]: HTTP_ERROR_MESSAGES.notFound,
  [ErrorCodes.SERVER_ERROR]: HTTP_ERROR_MESSAGES.serverError,
  [ErrorCodes.SERVICE_UNAVAILABLE]: HTTP_ERROR_MESSAGES.serverError,
  [ErrorCodes.REQUEST_TIMEOUT]: NETWORK_ERROR_MESSAGES.timeoutError,
};

// Mapeamento para erros genéricos e de rede (fora dos códigos HTTP)
export const NETWORK_ERROR_MESSAGES_CUSTOM = {
  networkError: NETWORK_ERROR_MESSAGES.networkError, // Para problemas de rede
  defaultError: GENERIC_ERROR_MESSAGES.genericError,  // Para erro genérico
};
