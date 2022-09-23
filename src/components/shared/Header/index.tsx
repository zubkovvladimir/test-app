import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout } from 'antd';
import HeaderLogo from 'assets/images/logo.svg';
import { Routes } from 'constants/routes';
import { setIsLoggedIn } from 'store/profile/actions';
import storage from 'utils/storage';

interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ collapsed, toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    storage.clearToken();
    dispatch(setIsLoggedIn(false));
  };

  return (
    <Layout.Header className="layout__header">
      <div className="logo" onClick={() => navigate(Routes.main)} style={{ width: collapsed ? 80 : 200 }}>
        <img alt="QuizArena" src={HeaderLogo} style={{ marginRight: collapsed ? '2px' : '10px' }} />
        {!collapsed && <span>test-app</span>}
      </div>
      <div className="layout__header-main">
        <div onClick={toggle} style={{ cursor: 'pointer' }}>
          <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </div>
        <div className="actions">
          <Button onClick={() => dispatch(onLogout)}>
            <LogoutOutlined />
            <span>Выйти</span>
          </Button>
        </div>
      </div>
    </Layout.Header>
  );
};
