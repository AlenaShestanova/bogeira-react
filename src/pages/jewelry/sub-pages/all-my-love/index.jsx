import React from 'react';

import { Img1, Img2 } from '../../../../assets/images/jewelry/jewelry-items/all-my-love';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { JEWELRY_TRANSLATION_FILE_NAME } from '../../../../constants/translation-file-name';

const AllMyLove = () => {
  const images = [Img1, Img2];

  const data = useSubPages({
    translationFile: JEWELRY_TRANSLATION_FILE_NAME,
    keyPrefix: jewelryKeyPrefixes.all_my_love,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default AllMyLove;
