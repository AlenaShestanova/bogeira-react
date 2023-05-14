import React from 'react';

import {
  Img1,
  Img2,
  Img3,
} from '../../../../assets/images/cabinet-objects/cabinet-objects-items/goblet-kazan';
import { useSubPages } from '../../hooks/use-sub-pages';
import { cabinetKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const GobletKazan = () => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    keyPrefix: cabinetKeyPrefixes.gobletKazanPage,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default GobletKazan;
