export const removeNullishParams = (params: Record<string, unknown>): Record<string, unknown> =>
  Object.entries(params).reduce((p: Record<string, unknown>, [key, value]) => {
    if (value) {
      p[key] = value;
    }

    return p;
  }, {});
