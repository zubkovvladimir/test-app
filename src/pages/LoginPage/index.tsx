import { FC } from 'react';

import { useTitle } from 'ahooks';
import { LoginForm } from 'components/features/Login/LoginForm';
import { appName } from 'constants/app';
import { withAuthCheck } from 'hocs/withAuthCheck';

import classes from './LoginPage.module.scss';

const LoginPage: FC = () => {
  useTitle(`${appName} | Вход в кабинет`);

  return (
    <div className={classes.form}>
      <LoginForm />
    </div>
  );
};

export default withAuthCheck(LoginPage);
