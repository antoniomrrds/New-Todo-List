export const getEnumValuesAsNumbers = (enumType: object): number[] => {
  return Object.values(enumType).map(Number);
};