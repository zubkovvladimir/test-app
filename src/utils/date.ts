import { format } from 'date-fns';

export const getCurrentYear = (): string => {
  const now = new Date();
  return format(now, 'yyyy');
};
