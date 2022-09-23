export type UniqueId = number;

export interface TabItem {
  title: string;
  code: string;
}

export type ErrorType = string | { [key in string]: string[] };
