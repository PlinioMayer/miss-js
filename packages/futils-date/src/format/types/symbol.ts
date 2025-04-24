const symbols = [
  "G", // era
  "u", // year
  "y", // year of era
  "D", // day of year
  "M", // month of year
  "L", // month of year
  "d", // day of month
  "Q", // quarter of year
  "q", // quarter of year
  "Y", // week based year
  "w", // week of week based year
  "W", // week of month
  "E", // day of week
  "e", // localized day of week
  "c", // localized day of week
  "F", // week of mont
  "a", // AM/PM
  "h", // clock hour of AM/PM
  "K", // hour of AM/PM
  "k", // clock hour
  "H", // hour of day
  "m", // minute of hour
  "s", // second of minute
  "S", // fraction of second
  "A", // mili of day
  "n", // nano of second
  "N", // nano of day
  "V", // time zone ID
  "z", // time zone name
  "0", // localized zone offset
  "X", // zone offset
  "x", // zone offset
  "Z", // zone offset
  "p", // pad next
  "'", // escape for text
  "''", // single quote
  "[", // optional section start
  "]", // optional section end
  "#", // reserved for future use
  "{", // reserved for future use
  "}", // reserved for future use
] as const;

export type FormatSymbol = (typeof symbols)[number];
export const formatSymbols = symbols as unknown as string[];
