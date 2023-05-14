import React from 'react';

import { Img1, Img2 } from '../../../../assets/images/cabinet-objects/cabinet-objects-items/plate';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { cabinetKeyPrefixes } from '../../../../constants/translation-keys';
import { SubPageLayout } from '../../../../components/sub-page-layout';
import { CABINET_TRANSLATION_FILE_NAME } from '../../../../constants/translation-file-name';

const Plate = () => {
  const images = [Img1, Img2];

  const data = useSubPages({
    translationFile: CABINET_TRANSLATION_FILE_NAME,
    keyPrefix: cabinetKeyPrefixes.platePage,
  });

  return <SubPageLayout images={images} {...data} />;
};
export default Plate;
