import classes from '../../../about.module.scss';
import React from 'react';

export const FactsLabel = ({ label, className, handleClick }) => {
  return (
    <div className={`${classes.factsLabel} ${className}`} onClick={handleClick}>
      {label}
    </div>
  );
};
