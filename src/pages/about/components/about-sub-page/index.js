import React from 'react';

import { BackToAboutBtn } from '../../../../components/back-to-about-btn';
import { PhotoCard } from '../../../../components/photo-card';
import { Footer } from '../../../../components/footer';
import { useResize } from '../../../../hooks/use-resize';

import classes from './about-sub-page.module.scss';

export const AboutSubPage = ({ label, items }) => {
  const { isMobile } = useResize();

  return (
    <>
      {!isMobile && <BackToAboutBtn label={label} />}
      <div className={classes.photosGrid}>
        {items.map(({ text, img }) => (
          <PhotoCard img={img} text={text} />
        ))}
      </div>
      <Footer />
    </>
  );
};
