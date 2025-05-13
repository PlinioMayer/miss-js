import { BooleanIs } from "@miss-js/boolean";
import { ObjectIs } from "@miss-js/object";

export type MissJS = {
  is: (value: unknown) => BooleanIs & ObjectIs;
};
