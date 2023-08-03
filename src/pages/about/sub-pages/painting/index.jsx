import React from 'react';

import { AboutSubPage } from '../../components/about-sub-page';
import { useAboutSubPage } from '../../hooks/use-about-sub-page';
import { Img1, Img3, Img2 } from '../../../../assets/images/about/painting';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Painting = () => {
  const { keyPrefixes } = TRANSLATION_CONFIG.about;

  const images = [Img1, Img2, Img3];

  const { items, label } = useAboutSubPage({
    keyPrefix: keyPrefixes.paintingPage,
    images,
  });

  return <AboutSubPage label={label} items={items} />;
};
export default Painting;
