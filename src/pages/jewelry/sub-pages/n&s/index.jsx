import React from 'react';

import { Img1, Img2, Img3, Img4 } from '../../../../assets/images/jewelry/jewelry-items/n&s';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const Ns = () => {
  const { keyPrefixes, fileName } = TRANSLATION_CONFIG.jewelry;

  const images = [Img1, Img2, Img3, Img4];

  const data = useSubPages({
    translationFile: fileName,
    keyPrefix: keyPrefixes.nsPage,
  });
  return <SubPageLayout {...data} images={images} />;
};
export default Ns;
