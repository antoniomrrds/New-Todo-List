// Função para limpar a descrição removendo tags HTML
export const cleanDescription = (html: string): string => {
  const text = html.replace(/<[^>]+>/g, "").trim();
  return text;
};