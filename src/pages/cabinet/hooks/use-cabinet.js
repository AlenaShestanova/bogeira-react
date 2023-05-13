import { useTranslation } from 'react-i18next';
import { CABINET_TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { Img1, Img2, Img3, Img4, Img5 } from '../../../assets/images/cabinet-objects';
import { cabinetKeyPrefixes } from '../../../constants/translation-keys';

export const useCabinet = () => {
  const { t } = useTranslation(CABINET_TRANSLATION_FILE_NAME);

  const images = [Img1, Img2, Img3, Img4, Img5];

  const translatedData = t(cabinetKeyPrefixes.cabinetPage, { returnObjects: true });

  const items = images.map((item, index) => ({
    imgSrc: item,
    ...translatedData[index],
  }));

  return {
    items,
  };
};
