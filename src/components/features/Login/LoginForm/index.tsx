import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Typography } from 'antd';
import { FormItem } from 'components/shared/FormItem';
// import { Routes } from 'constants/routes';
// import { useTypedSelector } from 'hooks/useTypedSelector';
import { LoginPayload } from 'interfaces/api/profile.interfaces';
import { login } from 'store/profile/actions';
import { loginSchema } from 'utils/validations';

import classes from './LoginPageForm.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Preloader } from 'components/shared/Preloader';

const { Title } = Typography;
const { Password } = Input;

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useTypedSelector((state) => state.profile.isLoading);
  // const authError = useTypedSelector((state) => state.profile.error);

  const { control, handleSubmit, watch } = useForm<LoginPayload>({
    resolver: yupResolver(loginSchema),
  });
  // const watchLoginData = watch(['password', 'username']);

  const onSubmit: SubmitHandler<LoginPayload> = (form) => {
    dispatch(login(form));
    console.log('dffd');
  };

  // useEffect(() => {
  //   if (authError) {
  //     dispatch(clearProfileError());
  //   }
  // }, [watchLoginData]);

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
          <FormItem errorMessage={error?.message} name="Пароль">
            <Password size="large" type="password" {...field} />
          </FormItem>
        )}
      />

      <Button htmlType="submit" type="primary">
        <Preloader color="white" isLoading={isLoading} type="button">
          Войти
        </Preloader>
      </Button>
    </form>
  );
};
