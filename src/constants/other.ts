import { PageMeta } from 'interfaces/api/response.interfaces';
import { Sort } from 'interfaces/layout.interfaces';

export const SortDirections: Sort = {
  up: 'ascend',
  down: 'descend',
};

export const defaultPageMeta: PageMeta = {
  currentPage: 1,
  lastPage: 1,
  pageSize: 8,
  total: 0,
};

export const MaxTabsInRow = 4;
