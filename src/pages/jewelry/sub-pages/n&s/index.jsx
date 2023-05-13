import React from 'react';

import { JewelrySubPage } from '../../components/jewelry-sub-page';
import { Img1, Img2, Img3, Img4 } from '../../../../assets/images/jewelry/jewelry-items/n&s';
import { useSubPages } from '../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';

const Ns = () => {
  const images = [Img1, Img2, Img3, Img4];

  const data = useSubPages({
    keyPrefix: jewelryKeyPrefixes.nsPage,
  });
  return <JewelrySubPage {...data} images={images} />;
};
export default Ns;
