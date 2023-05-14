import React from 'react';

import { Img1, Img2 } from '../../../../assets/images/cabinet-objects/cabinet-objects-items/plate';
import { useSubPages } from '../../hooks/use-sub-pages';
import { cabinetKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Plate = () => {
  const images = [Img1, Img2];

  const data = useSubPages({
    keyPrefix: cabinetKeyPrefixes.platePage,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Plate;
