import { FC } from 'react';

import { Spin } from 'antd';
import cx from 'classnames';

import classes from './Loader.module.scss';

interface LoaderProps {
  isLoading?: boolean;
  size?: 'small' | 'large' | 'default';
}

export const Loader: FC<LoaderProps> = ({ isLoading = true, size = 'default' }) => (
  <div className={cx(classes.root, { [classes['root--full']]: size === 'large' })}>
    <Spin size={size} spinning={isLoading} />
  </div>
);
