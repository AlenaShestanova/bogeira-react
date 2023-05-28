import React from 'react';

import { Img1, Img2 } from '../../../../assets/images/jewelry/jewelry-items/rosemary';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Rosemary = () => {
  const { keyPrefixes, fileName } = TRANSLATION_CONFIG.jewelry;

  const images = [Img1, Img2];

  const data = useSubPages({
    translationFile: fileName,
    keyPrefix: keyPrefixes.rosemary,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Rosemary;
