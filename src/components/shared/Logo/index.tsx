import { FC } from 'react';

import { ReactComponent as LogoSvg } from 'assets/images/logo.svg';

import classes from './Logo.module.scss';

export const Logo: FC = () => (
  <div className={classes.root}>
    <LogoSvg />
  </div>
);
