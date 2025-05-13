export interface Is<T extends Record<string, (value?: unknown) => boolean>> {
  (value: unknown): T;
}

export interface Format<T extends Record<string, (value?: unknown) => string>> {
  (value: unknown): T;
}

export interface Parse<T extends Record<string, (value?: string) => U>, U> {
  (value: string): T;
}
