import { FC, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Layout } from 'antd';
import { SideMenu } from 'components/features/SideMenu';
import { Header } from 'components/shared/Header';
import { Preloader } from 'components/shared/Preloader';
import { Routes } from 'constants/routes';
import { withAuthOnly } from 'hocs/withAuthOnly';
import './MainLayout.scss';
import storage from 'utils/storage';

const { Sider, Content } = Layout;

const MainLayout: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [drawerIsCollapsed, setDrawerIsCollapsed] = useState(false);

  const toggle = () => {
    const newValue = !drawerIsCollapsed;
    storage.setItem('drawer', newValue);
    setDrawerIsCollapsed(newValue);
  };

  useEffect(() => {
    if (pathname === Routes.main) {
      navigate(Routes.contacts);
    }
  }, [pathname]);

  return (
    <Layout className="layout">
      <Header collapsed={drawerIsCollapsed} toggle={toggle} />

      <Layout style={{ marginTop: 10 }}>
        <Sider className="layout__sider" collapsed={drawerIsCollapsed} collapsible trigger={null}>
          <SideMenu />
        </Sider>

        <Content className="layout__content">
          <Suspense fallback={<Preloader color="darkBlue" isLoading type="page" />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default withAuthOnly(MainLayout);
