import React from 'react';

import { Img1, Img2, Img3, Img4 } from '../../../../assets/images/jewelry/jewelry-items/n&s';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { JEWELRY_TRANSLATION_FILE_NAME } from '../../../../constants/translation-file-name';

const Ns = () => {
  const images = [Img1, Img2, Img3, Img4];

  const data = useSubPages({
    translationFile: JEWELRY_TRANSLATION_FILE_NAME,
    keyPrefix: jewelryKeyPrefixes.nsPage,
  });
  return <SubPageLayout {...data} images={images} />;
};
export default Ns;