import React from 'react';

import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/intellectual';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { JEWELRY_TRANSLATION_FILE_NAME } from '../../../../constants/translation-file-name';

const Intellectual = () => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    translationFile: JEWELRY_TRANSLATION_FILE_NAME,
    keyPrefix: jewelryKeyPrefixes.intellectual,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Intellectual;
