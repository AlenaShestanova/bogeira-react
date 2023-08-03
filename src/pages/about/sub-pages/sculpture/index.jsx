import React from 'react';

import { AboutSubPage } from '../../components/about-sub-page';
import { useAboutSubPage } from '../../hooks/use-about-sub-page';
import { Img1, Img2, Img3, Img4 } from '../../../../assets/images/about/sculpture';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Sculpture = () => {
  const { keyPrefixes } = TRANSLATION_CONFIG.about;

  const images = [Img1, Img2, Img3, Img4];

  const { items, label } = useAboutSubPage({
    keyPrefix: keyPrefixes.sculpturePage,
    images,
  });

  return <AboutSubPage label={label} items={items} />;
};
export default Sculpture;
