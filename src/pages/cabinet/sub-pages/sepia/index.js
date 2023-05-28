import React from 'react';

import {
  Img1,
  Img2,
  Img3,
} from '../../../../assets/images/cabinet-objects/cabinet-objects-items/sepia';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Sepia = () => {
  const { keyPrefixes, fileName } = TRANSLATION_CONFIG.cabinet;

  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    translationFile: fileName,
    keyPrefix: keyPrefixes.sepiaPage,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Sepia;
