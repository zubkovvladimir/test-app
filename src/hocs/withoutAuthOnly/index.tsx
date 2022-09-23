import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes } from 'constants/routes';
import { useTypedSelector } from 'hooks/useTypedSelector';

/**
 * Redirect on main page if user is logged in
 */
export function withoutAuthOnly<T = any>(Component: FC<T>) {
  return (props: T): ReactElement => {
    const navigate = useNavigate();

    const isLoggedIn = useTypedSelector((state) => state.profile.isLoggedIn);

    useEffect(() => {
      if (isLoggedIn) {
        navigate(Routes.main);
      }
    }, [isLoggedIn]);

    return <Component {...props} />;
  };
}
