export const oneOf = <T>(value: unknown, values: T[]): T | undefined => {
  return values.find((a) => a === value);
};

export const isOneOf = <T>(value: unknown, values: T[]): value is T => {
  return values.find((a) => a === value) !== undefined;
};
