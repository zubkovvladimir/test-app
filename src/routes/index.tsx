import { FC, lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { Routes } from 'constants/routes';

const AuthLayout = lazy(() => import(/* webpackChunkName: "auth'" */ 'layouts/AuthLayout'));
const MainLayout = lazy(() => import(/* webpackChunkName: "main'" */ 'layouts/MainLayout'));

const LoginPage = lazy(() => import(/* webpackChunkName: "auth'" */ 'pages/LoginPage'));
const ContactsPage = lazy(() => import(/* webpackChunkName: "contacts'" */ 'pages/ContactsPage'));
const NotFoundPage = lazy(() => import(/* webpackChunkName: "404" */ 'pages/NotFoundPage'));

const routes: RouteObject[] = [
  {
    path: Routes.login,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: Routes.main,
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: Routes.contacts,
        element: <ContactsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const RenderRoute: FC = () => useRoutes(routes);
