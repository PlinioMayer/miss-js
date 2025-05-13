import { Is } from "@miss-js/types";
import { is as objectIs } from "@miss-js/object";

export type BooleanIs = {
  true: () => boolean;
  false: () => boolean;
};

export const is: Is<BooleanIs> = (value: unknown): BooleanIs => ({
  true: () => objectIs(value).equal(true),
  false: () => objectIs(value).equal(false),
});
