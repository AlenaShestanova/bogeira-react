import React from 'react';

import { useSubPages } from '../../hooks/use-sub-pages';
import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/aquarius';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Aquarius = () => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    keyPrefix: jewelryKeyPrefixes.aquariusPage,
  });

  return <SubPageLayout {...data} images={images} />;
};
export default Aquarius;
