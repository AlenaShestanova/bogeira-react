import { useTranslation } from 'react-i18next';

import { TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { aboutSubPagesTranslationKeys } from '../../../constants/translation-keys';

export const useAboutSubPage = ({ keyPrefix, images }) => {
  const { t } = useTranslation(TRANSLATION_FILE_NAME, { keyPrefix });

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
