import { useTranslation } from 'react-i18next';

import { TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { keyPrefixes, aboutPageKeys } from '../../../constants/translation-keys';

export const useAbout = () => {
  const { t } = useTranslation(TRANSLATION_FILE_NAME, { keyPrefix: keyPrefixes.aboutPage });

  const { whyBogeira, bogeiraInfo, photoAuthor, factList } = aboutPageKeys;

  return {
    whyBogeira: t(whyBogeira),
    bogeiraInfo: t(bogeiraInfo),
    photoAuthor: t(photoAuthor),
    factList: t(factList, { returnObjects: true }),
  };
};
