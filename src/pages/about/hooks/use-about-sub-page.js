import { useTranslation } from 'react-i18next';

import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';
import { aboutSubPagesTranslationKeys } from '../../../constants/general-translation-keys';

export const useAboutSubPage = ({ keyPrefix, images }) => {
  const { fileName } = TRANSLATION_CONFIG.about;

  const { t } = useTranslation(fileName, { keyPrefix });

  const { label: labelText, photoDescriptions } = aboutSubPagesTranslationKeys;

  const descriptions = t(photoDescriptions, { returnObjects: true });
  const label = t(labelText);

  const items = Array.isArray(descriptions)
    ? descriptions.map((item, index) => ({
        text: item,
        img: images[index],
      }))
    : [];

  return { items, label };
};
