import { useEffect, useState } from 'react';

import { defaultPageMeta } from 'constants/other';
import { removeNullishParams } from 'utils/helpers';

interface UseQueryParamsProps {
  onChange: (params: Record<string, unknown>) => void;
}

const defaultParams = {
  search: '',
  sort: '',
  sortBy: '',
  perPage: defaultPageMeta.pageSize,
  page: defaultPageMeta.currentPage,
};

export const useQueryParams = ({ onChange }: UseQueryParamsProps): ((newParams: Record<string, unknown>) => void) => {
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    onChange(removeNullishParams(params));
  }, [params]);

  return (newParams: Record<string, unknown>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  };
};
