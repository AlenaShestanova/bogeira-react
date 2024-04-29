import React from 'react';
import { SlideshowLightbox } from 'lightbox.js-react';
import { withTranslation } from 'react-i18next';

import Footer from '../../components/footer';
import { useTouchByTouch } from './hooks/use-touch-by-touch';

import classes from './touch-by-touch.module.scss';
import { useResize } from '../../hooks/use-resize';

const TouchByTouch = props => {
  const { images, name, description, photo, material } = useTouchByTouch(props);
  const { isMobile } = useResize();

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
        <SlideshowLightbox theme="day" showControls backgroundColor="#FFF" showThumbnails>
          {images.map(imgSrc => (
            <img src={imgSrc} alt="touch-by-touch collection" />
          ))}
        </SlideshowLightbox>
      </div>
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};

export default withTranslation('touch_by_touch')(TouchByTouch);
