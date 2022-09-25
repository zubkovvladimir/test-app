import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input, InputNumber, Select, Space } from 'antd';
import { FormItem } from 'components/shared/FormItem';
import { useTypedSelector } from 'hooks/useTypedSelector';

import classes from './ModalForm.module.scss';

const { Option } = Select;
const { TextArea } = Input;

export const ModalForm: React.FC = () => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field, fieldState: { error } }) => (
          <FormItem errorMessage={error?.message} name="Имя">
            <Input {...field} />
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field, fieldState: { error } }) => (
          <FormItem errorMessage={error?.message} name="Фамилия">
            <Input {...field} />
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name="patronymic"
        render={({ field, fieldState: { error } }) => (
          <FormItem errorMessage={error?.message} name="Отчество">
            <Input {...field} />
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name="age"
        render={({ field, fieldState: { error } }) => (
          <FormItem errorMessage={error?.message} name="Возраст">
            <InputNumber min={1} type="number" {...field} />
          </FormItem>
        )}
      />
    </>
  );
};
