import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'constants/routes';
import { useTypedSelector } from 'hooks/useTypedSelector';

/**
 * Redirect on login page if user is not logged in
 */
export function withAuthOnly<T = any>(Component: FC<T>) {
  return (props: T): ReactElement => {
    const navigate = useNavigate();

    const isLoggedIn = useTypedSelector((state) => state.profile.isLoggedIn);

    useEffect(() => {
      if (!isLoggedIn) {
        navigate(Routes.login);
      }
    }, [isLoggedIn]);

    return <Component {...props} />;
  };
}
