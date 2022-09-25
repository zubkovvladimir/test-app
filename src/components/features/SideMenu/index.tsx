import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Menu } from 'antd';
import { navItems } from 'constants/paths';
import { Routes } from 'constants/routes';
import { MenuItem } from 'interfaces/layout.interfaces';

const { Item, ItemGroup } = Menu;

const iconColors: Record<string, string> = {
  [Routes.contacts]: '#b37feb',
};

type Paths = keyof typeof iconColors;

const getTitle = (menu: MenuItem) => (
  <span style={{ display: 'flex', alignItems: 'center' }}>
    <menu.icon className="anticon" fill={iconColors[menu.path] as Paths} />
    <span>{menu.name}</span>
  </span>
);

const renderItem = (item: MenuItem) => <Item key={item.path}>{getTitle(item)}</Item>;

const renderSubItem = (item: MenuItem) => (
  <ItemGroup key={item.path} title={item.name}>
    {item.children?.map(renderItem)}
  </ItemGroup>
);

export const SideMenu: FC = () => {
  const [current, setCurrent] = useState<string>('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onMenuClick = (path: string) => {
    if (path !== pathname) {
      navigate(path);
    }
  };

  useEffect(() => {
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
