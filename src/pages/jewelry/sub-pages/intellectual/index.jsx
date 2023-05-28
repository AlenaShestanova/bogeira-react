import React from 'react';

import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/intellectual';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Intellectual = () => {
  const { keyPrefixes, fileName } = TRANSLATION_CONFIG.jewelry;

  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    translationFile: fileName,
    keyPrefix: keyPrefixes.intellectual,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Intellectual;
