import React, { memo } from 'react';
import classes from '../home.module.scss';

export const ImgCard = memo(({ src, alt }) => {
  return (
    <div className={classes.imgWrap}>
      <img className={classes.img} src={src} alt={alt} />
    </div>
  );
});
