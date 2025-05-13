import { Is } from "@miss-js/types";

export type ObjectIs = {
  equal: (value: unknown) => boolean;
  truthy: () => boolean;
  falsy: () => boolean;
  object: () => boolean;
  array: () => boolean;
  date: () => boolean;
  string: () => boolean;
  number: () => boolean;
  boolean: () => boolean;
  undefined: () => boolean;
  null: () => boolean;
  symbol: () => boolean;
};

export const is: Is<ObjectIs> = (value1: unknown): ObjectIs => ({
  equal: (value2: unknown) => value1 === value2,
  truthy: () => !!value1,
  falsy: () => !value1,
  object: () => typeof value1 === "object",
  array: () => Array.isArray(value1),
  date: () => value1 instanceof Date,
  string: () => typeof value1 === "string",
  number: () => typeof value1 === "number",
  boolean: () => typeof value1 === "boolean",
  undefined: () => value1 === undefined,
  null: () => value1 === null,
  symbol: () => typeof value1 === "symbol",
});
