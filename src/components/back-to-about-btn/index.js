import React from 'react';
import { NavLink } from 'react-router-dom';

import { RoutesNames } from '../../routes/routes-names';
import BackIcon from '../../assets/images/back-icon.svg';

import classes from './back-btn.module.scss';

export const BackToAboutBtn = ({ label }) => {
  return (
    <div className={classes.container}>
      <NavLink to={RoutesNames.ABOUT}>
        <img src={BackIcon} alt="back icon" />
      </NavLink>
      <span>{label}</span>
    </div>
  );
};
