import { errorsDicts } from 'constants/errors';
import { ErrorType } from 'interfaces/common.interfaces';

export const parseErrorMessage = (message: ErrorType, fieldName?: string): string => {
  if (typeof message === 'string') {
    return errorsDicts[message] ?? message;
  }
  if (fieldName) {
    return errorsDicts[message[fieldName][0]] ?? message[fieldName][0];
  }
  return '';
};
