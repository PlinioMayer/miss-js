export interface Is<T extends Record<string, (value?: unknown) => boolean>> {
  (value: unknown): T;
}

export interface Format<T extends Record<string, (value: U) => string>, U> {
  (formatter: string): T;
}

export interface Parse<T extends Record<string, (value?: unknown) => U>, U> {
  (value: string): T;
}
