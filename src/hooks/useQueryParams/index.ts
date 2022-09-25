import { useState } from 'react';

import { defaultPageMeta } from 'constants/other';
import { removeNullishParams } from 'utils/helpers';

interface UseQueryParamsProps {
  onChange: (params: Record<string, unknown>) => void;
}

interface UseQueryParamsProps {
  onChange: (params: Record<string, unknown>) => void;
}

const defaultParams = {
  q: '',
  _sort: '',
  _order: '',
  _limit: defaultPageMeta._limit,
  _page: defaultPageMeta._page,
};

export const useQueryParams = ({
  onChange,
}: UseQueryParamsProps): [(newParams: Record<string, unknown>) => void, typeof defaultParams] => {
  const [params, setParams] = useState(defaultParams);

  return [
    (newParams: Record<string, unknown>) => {
      setParams((prev) => ({ ...prev, ...newParams }));
      onChange(removeNullishParams({ ...params, ...newParams }));
    },
    params,
  ];
};
