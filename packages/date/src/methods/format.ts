import { is } from "@miss-js/object";
import { Format } from "@miss-js/types";
import { DateFormatError } from "@date/errors";
import { extract } from "@date/utils";
import { Symbols, Symbol } from "@date/types";

export type DateFormat = {
  date: (d: Date) => string;
};

export const format: Format<DateFormat, Date> = (formatter: string) => ({
  date: (d: Date): string => {
    if (!is(d).date()) {
      throw new TypeError(`${d} must be a Date.`);
    }

    let formatted = "";

    for (let i = 0, j = 0; i < formatter.length; i = j) {
      j = i + 1;

      if (!(Symbols as unknown as string[]).includes(formatter[i])) {
        throw new DateFormatError(formatter, formatter.substring(i, j));
      }

      if (formatter[i] === "'") {
        if (formatter[j] === "'") {
          formatted += "'";
          j++;
          continue;
        }

        while (j < formatter.length && formatter[j] !== "'") j++;

        if (formatter[j] !== "'") {
          throw new DateFormatError(formatter, formatter.substring(i, j));
        }

        formatted += formatter.substring(i + 1, j);
        j++;
        continue;
      }

      while (j < formatter.length && formatter[i] === formatter[j]) j++;

      formatted += extract[formatter[i] as Symbol](
        d as Date,
        formatter.substring(i, j),
      );
    }

    return formatted;
  },
});
