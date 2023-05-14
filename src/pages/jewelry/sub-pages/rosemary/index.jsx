import React from 'react';

import { Img1, Img2 } from '../../../../assets/images/jewelry/jewelry-items/rosemary';
import { useSubPages } from '../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Rosemary = () => {
  const images = [Img1, Img2];

  const data = useSubPages({
    keyPrefix: jewelryKeyPrefixes.rosemary,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Rosemary;
