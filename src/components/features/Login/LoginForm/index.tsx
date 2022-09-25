import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { LoadingOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Spin, Typography } from 'antd';
import { FormItem } from 'components/shared/FormItem';
import { errorsDicts } from 'constants/errors';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { LoginPayload } from 'interfaces/api/profile.interfaces';
import { login } from 'store/profile/actions';
import { loginSchema } from 'utils/validations';

const { Title } = Typography;
const { Password } = Input;

export const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useTypedSelector((state) => state.profile);

  const authErrorMessage = error ? errorsDicts[error] : null;

  const { control, handleSubmit } = useForm<LoginPayload>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginPayload> = (form) => {
    dispatch(login(form));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 35 }}>
      <Title level={5}>Вход в кабинет</Title>

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <FormItem errorMessage={error?.message} name="Почта, или логин">
            <Input size="large" {...field} />
          </FormItem>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <FormItem errorMessage={error?.message || authErrorMessage} name="Пароль">
            <Password size="large" type="password" {...field} />
          </FormItem>
        )}
      />

      <Button htmlType="submit" type="primary">
        {isLoading ? <Spin indicator={<LoadingOutlined spin style={{ color: 'white', minWidth: 40 }} />} /> : 'Войти'}
      </Button>
    </form>
  );
};
