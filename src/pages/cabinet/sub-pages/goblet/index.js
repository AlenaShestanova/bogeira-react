import React from 'react';

import {
  Img1,
  Img2,
  Img3,
} from '../../../../assets/images/cabinet-objects/cabinet-objects-items/goblet';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { cabinetKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { CABINET_TRANSLATION_FILE_NAME } from '../../../../constants/translation-file-name';

const Goblet = () => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    translationFile: CABINET_TRANSLATION_FILE_NAME,
    keyPrefix: cabinetKeyPrefixes.gobletPage,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Goblet;