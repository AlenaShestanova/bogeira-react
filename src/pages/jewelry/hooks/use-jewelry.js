import { useTranslation } from 'react-i18next';

import { Img1, Img2, Img3, Img6, Img7, Img5, Img4 } from '../../../assets/images/jewelry';
import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';

export const useJewelry = props => {
  const {
    keyPrefixes: { jewelryPage },
  } = TRANSLATION_CONFIG.jewelry;

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const translatedData = props.t(jewelryPage, { returnObjects: true });

  const items = images.map((item, index) => ({
    imgSrc: item,
    ...translatedData[index],
  }));

  return {
    items,
  };
};
