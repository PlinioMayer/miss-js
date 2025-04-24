import { FormatSymbol } from "./types";

const G = (date: Date, formatter: string): string => {
  return "";
};

export const formatters: Record<
  FormatSymbol,
  (date: Date, formatter: string) => string
> = { G };
