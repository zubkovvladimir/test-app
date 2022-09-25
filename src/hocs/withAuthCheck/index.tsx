import { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setIsLoggedIn } from 'store/profile/actions';
import { setAxiosAuthorizationToken } from 'utils/axios';
import storage from 'utils/storage';

export function withAuthCheck<T = any>(Component: FC<T>) {
  return (props: T): ReactElement => {
    const dispatch = useDispatch();
    const token = storage.getToken();

    if (token) {
      setAxiosAuthorizationToken(token);
      dispatch(setIsLoggedIn(true));
    } else {
      dispatch(setIsLoggedIn(false));
    }

    return <Component {...props} />;
  };
}
