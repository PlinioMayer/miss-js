export const is = (value: unknown) => ({
  true: () => value === true,
  false: () => value === false,
});
