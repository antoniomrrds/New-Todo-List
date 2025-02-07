export const parseIdOrDefault = (id: string | undefined): number =>
  id ? parseInt(id, 10) : 0;
