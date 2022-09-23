import { errorsDicts } from 'constants/errors';

export const parseErrorMessage = (message: string, fieldName?: string): string => {
  if (typeof message === 'string') {
    return errorsDicts[message] ?? message;
  }
  if (fieldName) {
    return errorsDicts[message[fieldName][0]] ?? message[fieldName][0];
  }
  return '';
};
