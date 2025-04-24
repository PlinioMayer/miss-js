export class DateFormatError extends Error {
  constructor(symbol: string) {
    super(`Inavlid format symbol ${symbol}`);
  }
}
