import { FormatSymbol, formatSymbols } from "./types";
import { formatters } from "./formatters";

export const format = (date: Date, formatter: string): string => {
  let result = "";

  for (let i = 0; i < formatter.length; i++) {
    const initial = i;

    if (!formatSymbols.includes(formatter[i])) {
      result += formatter[i];
      continue;
    }

    while (formatter[i + 1] == formatter[i]) i++;

    result += formatters[formatter[0] as FormatSymbol](
      date,
      formatter.substring(initial, i + 1),
    );
  }

  return result;
};
