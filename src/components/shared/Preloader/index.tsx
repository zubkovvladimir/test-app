import React from 'react';

import { Spin } from 'antd';
import cx from 'classnames';

import classes from './Preloader.module.scss';

type PreloaderType = 'block' | 'button' | 'page' | 'tiny' | 'fullPage';
type PreloaderColor = 'white' | 'darkBlue';

interface PreloaderProps {
  color: PreloaderColor;
  isLoading: boolean;
  type: PreloaderType;
  style?: { readonly [key: string]: string };
}

export const Preloader: React.FC<PreloaderProps> = ({ isLoading, style, type, children }) =>
  isLoading ? (
    <div className={cx(classes.preloader, { [classes[type]]: type })} style={style}>
      <Spin />
    </div>
  ) : (
    <>{children}</>
  );
