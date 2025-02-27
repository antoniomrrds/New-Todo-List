// Mensagens gerais
export const GENERIC_ERROR_MESSAGES = {
  genericError: 'Ocorreu um erro inesperado.\nTente novamente.',
  requestError:
    'Houve um problema ao configurar a solicitação.\nRevise as informações e tente novamente.',
};

// Mensagens de erro de autenticação
export const AUTH_ERROR_MESSAGES = {
  unauthorized:
    'Você não tem permissão para acessar essa informação.\nVerifique se está autenticado.',
  forbiddenError: 'Você não tem permissão para acessar esse recurso.',
};

// Mensagens de erro de rede
export const NETWORK_ERROR_MESSAGES = {
  networkError:
    'Não conseguimos nos conectar ao sistema.\nIsso pode acontecer por problemas técnicos.\nVerifique sua conexão com a internet.',
  timeoutError:
    'A solicitação demorou muito para ser processada.\nTente novamente mais tarde.',
};

// Mensagens específicas de erros HTTP
export const HTTP_ERROR_MESSAGES = {
  badRequest:
    'Houve um problema com sua solicitação.\nVerifique as informações e tente novamente.',
  notFound:
    'Desculpe, não conseguimos encontrar as informações que você pediu.\nTente novamente mais tarde.',
  serverError:
    'Houve um problema no sistema.\nNossa equipe já foi notificada.\nPor favor, tente novamente em alguns minutos.',
};
