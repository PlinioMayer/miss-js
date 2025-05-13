import { safeRequire } from "@/utils";
import { BooleanIs } from "@miss-js/boolean";
import { ObjectIs } from "@miss-js/object";

export const is = (value: unknown): BooleanIs & ObjectIs => ({
  ...((
    safeRequire("@miss-js/object") as {
      is: (value: unknown) => ObjectIs;
    }
  )?.is(value) ?? {}),
  ...((
    safeRequire("@miss-js/boolean") as {
      is: (value: unknown) => BooleanIs;
    }
  )?.is(value) ?? ({} as BooleanIs)),
});
