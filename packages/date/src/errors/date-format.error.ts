export class DateFormatError extends Error {
  public constructor(formatter: string, pattern: string) {
    super(`Invalid formatter ${formatter} caused by pattern ${pattern}`);
  }
}
