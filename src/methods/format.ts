import { DateFormat } from "@miss-js/date";
import { Format } from "@miss-js/types";
import { safeRequire } from "@/utils";

export const format: Format<DateFormat, Date> = (formatter: string) => ({
  ...((
    safeRequire("@miss-js/date") as {
      format: (formatter: string) => DateFormat;
    }
  )?.format(formatter) ?? {}),
});
