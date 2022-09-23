import { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'hooks/useTypedSelector';
// import { getProfileInfo } from 'store/profile/actions';

/**
 * Запрашивает информацию об авторизованном пользователе
 * @param App
 */
export const withUserInfoPreload =
  (Component: FC) =>
  (props: any): ReactElement => {
    const dispatch = useDispatch();
    const isLoggedIn = useTypedSelector((state) => state.profile.isLoggedIn);

    useEffect(() => {
      if (isLoggedIn) {
        // dispatch(getProfileInfo());
      }
    }, [isLoggedIn]);

    return <Component {...props} />;
  };
