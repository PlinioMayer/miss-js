import { safeRequire } from "@/utils";
import { BooleanIs } from "@miss-js/boolean";
import { ObjectIs } from "@miss-js/object";
import { Is } from "@miss-js/types";

export const is: Is<BooleanIs & ObjectIs> = (value: unknown) => ({
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
