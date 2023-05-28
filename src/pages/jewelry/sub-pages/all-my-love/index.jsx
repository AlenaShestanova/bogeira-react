import React from 'react';

import { Img1, Img2 } from '../../../../assets/images/jewelry/jewelry-items/all-my-love';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { TRANSLATION_CONFIG } from '../../../../constants/tranlsation-config';

const AllMyLove = () => {
  const { keyPrefixes, fileName } = TRANSLATION_CONFIG.jewelry;

  const images = [Img1, Img2];

  const data = useSubPages({
    translationFile: fileName,
    keyPrefix: keyPrefixes.all_my_love,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default AllMyLove;
