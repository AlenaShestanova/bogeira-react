import { Img1, Img2, Img3, Img6, Img7, Img5, Img4 } from '../../../assets/images/jewelry';
import { useTranslation } from 'react-i18next';
import { JEWELRY_TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { keyPrefixes } from '../../../constants/translation-keys';

export const useJewelry = () => {
  const { t } = useTranslation(JEWELRY_TRANSLATION_FILE_NAME);

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const translatedData = t(keyPrefixes.jewelryPage, { returnObjects: true });

  const items = images.map((item, index) => ({
    imgSrc: item,
    ...translatedData[index],
  }));

  return {
    items,
  };
};
