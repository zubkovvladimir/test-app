export type SortDirection = 'ascend' | 'descend';

export interface PageSorter {
  sort: string;
  dir: SortDirection;
}

export interface ParamsFetchAll {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: string;
  q?: string;
}

export interface PageMeta {
  _page: number;
  _limit: number;
  total: number;
}

export interface IEmptyResponse {
  errorMessage?: string;
  success?: boolean;
}

export interface IResponse<T> {
  success?: boolean;
  errorMessage?: string;
  data?: T;
}

export interface ReturnFetchAll<T> {
  totalCount: number;
  items: T[];
}

export interface IResponseWithMeta<T> {
  success?: boolean;
  errorMessage?: string;
  data?: ReturnFetchAll<T>;
}

export type ApiResponse<T> = Promise<IResponse<T>>;

export type ApiEmptyResponse = Promise<IEmptyResponse>;

export type ApiResponseWithMeta<T> = Promise<IResponseWithMeta<T>>;
