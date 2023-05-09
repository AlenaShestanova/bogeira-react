import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../home.module.scss';

export const ImgCard = memo(({ imgSrc, alt, route }) => {
  return (
    <NavLink to={route} className={classes.imgWrap}>
      <img className={classes.img} src={imgSrc} alt={alt} />
    </NavLink>
  );
});
