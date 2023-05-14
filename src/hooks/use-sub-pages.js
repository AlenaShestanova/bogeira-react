import { useTranslation } from 'react-i18next';

import { productDetailInfoKeys } from '../constants/translation-keys';

export const useSubPages = ({ translationFile, keyPrefix }) => {
  const { t } = useTranslation(translationFile, { keyPrefix });
  const { name, material, description, photo, object } = productDetailInfoKeys;

  return {
    name: t(name),
    material: t(material),
    description: t(description),
    photo: t(photo),
    object: t(object),
  };
};
