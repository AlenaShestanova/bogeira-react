import { useTranslation } from 'react-i18next';

import {
  Img1,
  Img2,
  Img3,
  Img5,
  Img4,
  Img6,
  Img8,
  Img9,
  Img7,
  Img13,
  Img12,
  Img11,
  Img10,
} from '../../../assets/images/touch-by-touch';
import { TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { keyPrefixes, touchByTouchKeys } from '../../../constants/translation-keys';

export const useTouchByTouch = () => {
  const { t } = useTranslation(TRANSLATION_FILE_NAME, { keyPrefix: keyPrefixes.touchByTouchPage });
  const { name, material, description, photo } = touchByTouchKeys;

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13];

  return {
    images,
    name: t(name),
    material: t(material),
    description: t(description),
    photo: t(photo),
  };
};
