// Recupera um objeto do localStorage e o converte de volta para o tipo desejado
export const getObjectFromLocalStorage = <T>(
  key: string,
  defaultValue: T,
): T => {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) return defaultValue; // Se não existir no localStorage, retorna o valor padrão
  try {
    return JSON.parse(storedValue) as T; // Converte de volta para objeto
  } catch {
    return defaultValue; // Retorna o valor padrão em caso de erro
  }
};

// Armazena qualquer objeto diretamente no localStorage como JSON
export const saveObjectToLocalStorage = <T>(key: string, object: T): void => {
  localStorage.setItem(key, JSON.stringify(object)); // Armazena o objeto como JSON
};

// Limpa os dados do localStorage relacionados aos filtros
// Função para limpar todo o localStorage
export const clearAllFromLocalStorage = (): void => {
  localStorage.clear();
};
