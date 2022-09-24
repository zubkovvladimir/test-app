import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Input, Select, Space } from 'antd';
import { FormItem } from 'components/shared/FormItem';
import { useTypedSelector } from 'hooks/useTypedSelector';

import classes from './ModalForm.module.scss';

const { Option } = Select;

export const ModalForm: React.FC = () => {
  const { control } = useFormContext();

  // const { items } = useTypedSelector((state) => state.catalogManagement);

  // линтер ругается на идентичный кусок кода
  const renderOptions = ({ name, code, id }: { name: string; code: string; id: number }) => (
    <Option key={code} value={id}>
      {name}
    </Option>
  );

  return (
    <>
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState: { error } }) => (
          <FormItem errorMessage={error?.message} name="Имя">
            <Input {...field} />
          </FormItem>
        )}
      />
    </>
  );
};
