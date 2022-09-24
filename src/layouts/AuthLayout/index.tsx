import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Layout, Spin } from 'antd';
import cx from 'classnames';
import { Footer } from 'components/shared/Footer';
import { Loader } from 'components/shared/Loader';
import { Logo } from 'components/shared/Logo';
import { withoutAuthOnly } from 'hocs/withoutAuthOnly';

import classes from './AuthLayout.module.scss';
import { Preloader } from 'components/shared/Preloader';

const { Header, Content, Footer: LayoutFooter } = Layout;

const AuthLayout: FC = () => (
  <Suspense fallback={<Preloader color="darkBlue" isLoading type="page" />}>
    <Layout className={classes.root}>
      <Header className={cx(classes.wrapper, classes.header)}>
        <Logo />
      </Header>
      <Content className={classes.wrapper}>
        <div style={{ border: '1px solid red', marginBottom: 50 }}>
          <p style={{ textAlign: 'center', marginTop: '1em' }}>Логин: bruno@email.com</p>
          <p style={{ textAlign: 'center' }}>Пароль: brunomailQ!1</p>
        </div>

        <Outlet />
      </Content>
      <LayoutFooter className={classes.footer}>
        <Footer />
      </LayoutFooter>
    </Layout>
  </Suspense>
);

export default withoutAuthOnly(AuthLayout);
