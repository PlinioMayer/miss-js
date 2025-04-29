export type IsBoolean = {
  true: () => boolean;
  false: () => boolean;
};

export const is = (value: unknown): IsBoolean => ({
  true: () => value === true,
  false: () => value === false,
});
