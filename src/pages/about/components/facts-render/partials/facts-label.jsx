import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../../about.module.scss';

export const FactsLabel = ({ label, className, handleClick, url }) => {
  const classNames = `${classes.factsLabel} ${className}`;
  const props = {
    to: url,
    className: classNames,
    onClick: handleClick,
  };

  if (url) {
    return <NavLink {...props}>{label}</NavLink>;
  }

  return <div {...props}>{label}</div>;
};
