import React from 'react';

import { useSubPages } from '../../../../hooks/use-sub-pages';
import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/aquarius';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Aquarius = () => {
  const { keyPrefixes, fileName } = TRANSLATION_CONFIG.jewelry;

  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    translationFile: fileName,
    keyPrefix: keyPrefixes.aquariusPage,
  });

  return <SubPageLayout {...data} images={images} />;
};
export default Aquarius;
