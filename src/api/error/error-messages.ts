
// export const ERROR_MESSAGES = {
//   // Mensagens genéricas
//   genericError: "Ocorreu um erro inesperado. Tente novamente.",
//   requestError: "Houve um problema ao configurar a solicitação. Revise as informações e tente novamente.",
  
//   // Mensagens relacionadas a erros de autenticação
//   unauthorized: "Você não tem permissão para acessar essa informação. Verifique se está autenticado.",
  
//   // Mensagens relacionadas a erros de rede
//   networkError: "Não conseguimos nos conectar ao sistema. Isso pode acontecer por problemas técnicos. Verifique sua conexão com a internet.",

//   // Mensagens específicas de erros HTTP
//   badRequest: "Houve um problema com sua solicitação. Verifique as informações e tente novamente.",
//   notFound: "Desculpe, não conseguimos encontrar as informações que você pediu. Tente novamente mais tarde.",
//   serverError: "Houve um problema no sistema. Nossa equipe já foi notificada. Por favor, tente novamente em alguns minutos.",
// } as const;


// export const STATUS_ERROR_MESSAGES: { [key: number]: string } = {
//   [ErrorCodes.BAD_REQUEST]: ERROR_MESSAGES.badRequest,
//   [ErrorCodes.NOT_FOUND]: ERROR_MESSAGES.notFound,
//   [ErrorCodes.SERVER_ERROR]: ERROR_MESSAGES.serverError,
//   [ErrorCodes.UNAUTHORIZED]: ERROR_MESSAGES.unauthorized,
//   // You can add more as needed
// };

// error-messages.ts

// Mensagens gerais
export const GENERIC_ERROR_MESSAGES = {
  genericError: "Ocorreu um erro inesperado. Tente novamente.",
  requestError: "Houve um problema ao configurar a solicitação. Revise as informações e tente novamente.",
};

// Mensagens de erro de autenticação
export const AUTH_ERROR_MESSAGES = {
  unauthorized: "Você não tem permissão para acessar essa informação. Verifique se está autenticado.",
  forbiddenError: "Você não tem permissão para acessar esse recurso.",
};

// Mensagens de erro de rede
export const NETWORK_ERROR_MESSAGES = {
  networkError: "Não conseguimos nos conectar ao sistema. Isso pode acontecer por problemas técnicos. Verifique sua conexão com a internet.",
  timeoutError: "A solicitação demorou muito para ser processada. Tente novamente mais tarde.",
};

// Mensagens específicas de erros HTTP
export const HTTP_ERROR_MESSAGES = {
  badRequest: "Houve um problema com sua solicitação. Verifique as informações e tente novamente.",
  notFound: "Desculpe, não conseguimos encontrar as informações que você pediu. Tente novamente mais tarde.",
  serverError: "Houve um problema no sistema. Nossa equipe já foi notificada. Por favor, tente novamente em alguns minutos.",
};

