import React from 'react';

import { useSubPages } from '../../../../hooks/use-sub-pages';
import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/aquarius';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { JEWELRY_TRANSLATION_FILE_NAME } from '../../../../constants/translation-file-name';

const Aquarius = () => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    translationFile: JEWELRY_TRANSLATION_FILE_NAME,
    keyPrefix: jewelryKeyPrefixes.aquariusPage,
  });

  return <SubPageLayout {...data} images={images} />;
};
export default Aquarius;
