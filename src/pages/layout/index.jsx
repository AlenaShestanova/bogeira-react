import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/header';

import classes from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={classes.root}>
      <Header />
      <Outlet />
    </div>
  );
};
