export const getEnumValuesAsNumbers = (enumType: object): number[] => {
  return Object.values(enumType).map(Number);
};

export const generateOptions = <T extends object>(
  enumType: T,
  getText: (value: T[keyof T]) => string,
) => {
  return Object.entries(enumType)
    .filter(([, value]) => typeof value === 'number')
    .map(([, value]) => ({
      value: value as T[keyof T],
      label: getText(value as T[keyof T]),
    }));
};
