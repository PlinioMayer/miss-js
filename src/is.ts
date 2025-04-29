import { IsBoolean } from "@miss-js/boolean";
import { safeRequire } from "@/utils";

export const is = (value: unknown): IsBoolean => ({
  ...((
    safeRequire("@miss-js/boolean") as { is: (value: unknown) => IsBoolean }
  )?.is(value) ?? {}),
});
