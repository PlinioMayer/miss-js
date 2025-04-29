export type IsBoolean = {
  true: () => boolean;
  false: () => boolean;
  truthy: () => boolean;
  falsy: () => boolean;
};

export const is = (value: unknown): IsBoolean => ({
  true: () => value === true,
  false: () => value === false,
  truthy: () => !!value,
  falsy: () => !value,
});
