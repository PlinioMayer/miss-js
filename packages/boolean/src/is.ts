import { is as objectIs } from "@miss-js/object";

export type BooleanIs = {
  true: () => boolean;
  false: () => boolean;
};

export const is = (value: unknown): BooleanIs => ({
  true: () => objectIs(value).equal(true),
  false: () => objectIs(value).equal(false),
});
