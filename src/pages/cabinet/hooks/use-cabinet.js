import { useTranslation } from 'react-i18next';

import { Img1, Img2, Img3, Img4, Img5 } from '../../../assets/images/cabinet-objects';
import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';

export const useCabinet = props => {
  const {
    keyPrefixes: { cabinetPage },
  } = TRANSLATION_CONFIG.cabinet;

  const images = [Img1, Img2, Img3, Img4, Img5];

  const translatedData = props.t(cabinetPage, { returnObjects: true });

  const items = images.map((item, index) => ({
    imgSrc: item,
    ...translatedData[index],
  }));

  return {
    items,
  };
};
