import React from 'react';

import {
  Img1,
  Img2,
  Img3,
} from '../../../../assets/images/cabinet-objects/cabinet-objects-items/goblet';
import { useSubPages } from '../../hooks/use-sub-pages';
import { cabinetKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Goblet = () => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    keyPrefix: cabinetKeyPrefixes.gobletPage,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Goblet;
