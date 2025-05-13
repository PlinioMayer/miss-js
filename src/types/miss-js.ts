import { BooleanIs } from "@boolean";
import { ObjectIs } from "@object";

export type MissJS = {
  is: (value: unknown) => BooleanIs & ObjectIs;
};
