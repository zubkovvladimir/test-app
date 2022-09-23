import { FC, ReactNode } from 'react';

import { Typography } from 'antd';
import cx from 'classnames';

import classes from './FormItem.module.scss';

const { Text } = Typography;

export interface FormItemProps {
  className?: string;
  errorMessage?: string | null;
  name?: string;
  nameRender?: ReactNode;
}

export const FormItem: FC<FormItemProps> = ({ name, className, errorMessage, children, nameRender }) => (
  <section className={cx(classes.formItem, className, { 'ant-form-item-has-error': !!errorMessage })}>
    {name && !nameRender && <Text style={{ marginBottom: 8 }}>{name}</Text>}
    {nameRender}
    {children}
    {errorMessage && <Text type="danger">{errorMessage}</Text>}
  </section>
);
