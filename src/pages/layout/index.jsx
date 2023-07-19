import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '../../components/header';
import { RoutesNames } from '../../routes/routes-names';
import classes from './layout.module.scss';
import { Footer } from '../../components/footer';

export const Layout = () => {
  const { pathname } = useLocation();

  if (pathname === RoutesNames.INDEX) return <Outlet />;

  return (
    <div className={classes.root}>
      <Header />
      <Outlet />
    </div>
  );
};
