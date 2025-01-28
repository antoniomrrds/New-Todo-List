// Codifica qualquer objeto em uma string compacta
export const encodeObject = <T>(object: T): string => {
  return btoa(JSON.stringify(object)); // Converte o objeto para JSON e codifica em Base64
};

// Decodifica uma string Base64 para um objeto
export const decodeObject = <T>(
  encodedString: string | null,
  defaultValue: T,
): T => {
  if (!encodedString) return defaultValue; // Retorna valor padrão se o valor codificado não existir
  try {
    return JSON.parse(atob(encodedString)) as T; // Decodifica Base64 e converte para objeto
  } catch {
    return defaultValue; // Retorna valor padrão em caso de erro
  }
};
