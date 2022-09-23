import { FC, ReactNode } from 'react';

import { Typography } from 'antd';
import cx from 'classnames';
import { ErrorType } from 'interfaces/common.interfaces';
import { parseErrorMessage } from 'utils/errors';

import classes from './FormItem.module.scss';

const { Text } = Typography;

export interface FormItemProps {
  className?: string;
  errorMessage?: ErrorType | null;
  name?: string;
  nameRender?: ReactNode;
  fieldName?: string;
}

export const FormItem: FC<FormItemProps> = ({ name, className, fieldName, errorMessage, children, nameRender }) => (
  <section className={cx(classes.formItem, className, { 'ant-form-item-has-error': !!errorMessage })}>
    {name && !nameRender && <Text style={{ marginBottom: 8 }}>{name}</Text>}
    {nameRender}
    {children}
    {errorMessage && <Text type="danger">{parseErrorMessage(errorMessage, fieldName)}</Text>}
  </section>
);
