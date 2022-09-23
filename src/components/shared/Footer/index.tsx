import { FC } from 'react';

import { appName } from 'constants/app';
import { getCurrentYear } from 'utils/date';

import classes from './Footer.module.scss';

export const Footer: FC = () => (
  <div className={classes.root}>
    <p className={classes.copy}>
      &copy;&nbsp;{appName},&nbsp;{getCurrentYear()}
    </p>
  </div>
);
