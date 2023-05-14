import { useTranslation } from 'react-i18next';

import { CABINET_TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { productDetailInfoKeys } from '../../../constants/translation-keys';

export const useSubPages = ({ keyPrefix }) => {
  const { t } = useTranslation(CABINET_TRANSLATION_FILE_NAME, { keyPrefix });
  const { name, material, description, photo, object } = productDetailInfoKeys;

  return {
    name: t(name),
    material: t(material),
    description: t(description),
    photo: t(photo),
    object: t(object),
  };
};
