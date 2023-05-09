import React from 'react';

import { AboutSubPage } from '../../components/about-sub-page';
import { useAboutSubPage } from '../../../../hooks/use-about-sub-page';
import { keyPrefixes } from '../../../../constants/translation-keys';
import { Img1, Img2, Img3, Img4 } from '../../../../assets/images/about/graphics';

const Graphics = () => {
  const images = [Img1, Img2, Img3, Img4];

  const { items, label } = useAboutSubPage({ keyPrefix: keyPrefixes.graphicsPage, images });

  return <AboutSubPage label={label} items={items} />;
};
export default Graphics;
