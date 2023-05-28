import React from 'react';

import {
  Img1,
  Img2,
  Img3,
  Img4,
} from '../../../../assets/images/jewelry/jewelry-items/health-nut-girl';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const HealthNutGirl = () => {
  const { keyPrefixes, fileName } = TRANSLATION_CONFIG.jewelry;

  const images = [Img1, Img2, Img3, Img4];

  const data = useSubPages({
    translationFile: fileName,
    keyPrefix: keyPrefixes.health_nut_girl,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default HealthNutGirl;
