import classes from './photo-card.module.scss';
import { useState } from 'react';
import { WithHoverImg } from './partials/with-hover-img';

export const PhotoCard = ({ imgUrl, text, imgHoverUrl }) => {
  return (
    <div className={classes.photoCardContainer}>
      {!imgHoverUrl && <img src={imgUrl} alt="photo" />}
      {imgHoverUrl && <WithHoverImg imgUrl={imgUrl} imgHoverUrl={imgHoverUrl} />}
      <div className={classes.text}>{text}</div>
    </div>
  );
};
