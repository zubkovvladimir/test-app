import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Menu } from 'antd';
import { navItems } from 'constants/paths';
import { Routes } from 'constants/routes';
import { MenuItem } from 'interfaces/layout.interfaces';

const { Item, ItemGroup } = Menu;

const iconColors = {
  [Routes.contacts]: '#b37feb',
};

const getTitle = (menu: MenuItem) => (
  <span style={{ display: 'flex', alignItems: 'center' }}>
    {/* @ts-ignore */}
    <menu.icon className="anticon" fill={iconColors[menu.path]} />
    <span>{menu.name}</span>
  </span>
);

const renderItem = (item: MenuItem) => <Item key={item.path}>{getTitle(item)}</Item>;

const renderSubItem = (item: MenuItem) => (
  <ItemGroup key={item.path} title={item.name}>
    {item.children?.map(renderItem)}
  </ItemGroup>
);

export const SideMenu: React.FC = () => {
  const [current, setCurrent] = React.useState<string>('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onMenuClick = (path: string) => {
    if (path === pathname) {
      return;
    }
    navigate(path);
  };

  React.useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  return (
    <Menu
      className="layout__side-menu"
      mode="inline"
      onClick={({ key }) => onMenuClick(key)}
      selectedKeys={[current]}
      theme="light"
    >
      {navItems.map((item) => (item.children ? renderSubItem(item) : renderItem(item)))}
    </Menu>
  );
};
