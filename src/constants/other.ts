import { PageMeta } from 'interfaces/api/response.interfaces';
import { Sort } from 'interfaces/layout.interfaces';

export const SortDirections: Sort = {
  up: 'ascend',
  down: 'descend',
};

export const defaultPageMeta: PageMeta = {
  _page: 1,
  _limit: 8,
  total: 0,
};

export const MaxTabsInRow = 4;
