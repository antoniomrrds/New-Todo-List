export const areObjectsEqual = <T extends object>(
  obj1: T,
  obj2: T,
): boolean => {
  return Object.keys(obj1).every(
    (key) => obj1[key as keyof T] === obj2[key as keyof T],
  );
};
