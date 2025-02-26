import Cookies from 'js-cookie';

// Função genérica para setar cookies
export const setCookie = (
  key: string,
  value: string,
  expiresInDays: number,
): void => {
  Cookies.set(key, value, { expires: expiresInDays });
};

// Função genérica para pegar cookies
export const getCookie = (key: string): string | undefined => {
  return Cookies.get(key);
};

// Função genérica para remover cookies
export const removeCookie = (key: string): void => {
  Cookies.remove(key);
};
