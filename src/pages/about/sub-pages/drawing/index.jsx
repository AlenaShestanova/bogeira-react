import React from 'react';

import { AboutSubPage } from '../../components/about-sub-page';
import { useAboutSubPage } from '../../hooks/use-about-sub-page';
import { Img1, Img2, Img3 } from '../../../../assets/images/about/drawing';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Drawing = () => {
  const { keyPrefixes } = TRANSLATION_CONFIG.about;

  const images = [Img1, Img2, Img3];

  console.log(keyPrefixes.drawingPage, 'KEY');
  const { items, label } = useAboutSubPage({
    keyPrefix: keyPrefixes.drawingPage,
    images,
  });

  return <AboutSubPage label={label} items={items} />;
};
export default Drawing;
