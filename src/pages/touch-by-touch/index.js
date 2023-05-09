import React from 'react';

import { Footer } from '../../components/footer';
import { useTouchByTouch } from './hooks/use-touch-by-touch';

import classes from './touch-by-touch.module.scss';

const TouchByTouch = () => {
  const { images, name, description, photo, material } = useTouchByTouch();

  return (
    <div className={classes.touchByContainer}>
      <div className={classes.info}>
        <span>
          {name} <br /> {material}
        </span>
        <p className={classes.description}>{description}</p>
        <span>{photo}</span>
      </div>
      <div className={classes.imagesListGrid}>
        {images.map(imgSrc => (
          <img src={imgSrc} alt="touch-by-touch collection" />
        ))}
      </div>
      <Footer isHalfPage />
    </div>
  );
};

export default TouchByTouch;
