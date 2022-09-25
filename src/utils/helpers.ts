export const removeNullishParams = (params: Record<string, unknown>): Record<string, unknown> =>
  Object.entries(params).reduce((p: Record<string, unknown>, [key, value]) => {
    if (value) {
      p[key] = value;
    }

    return p;
  }, {});

export const getPagesTotalCount = (totalItems: number, limit: number): number => Math.ceil(totalItems / limit);
