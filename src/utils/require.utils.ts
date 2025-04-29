export const safeRequire = (module: string): unknown => {
  try {
    return require(module);
  } catch {
    return null;
  }
};
