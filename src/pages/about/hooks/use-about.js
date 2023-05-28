import { useTranslation } from 'react-i18next';

import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';

export const useAbout = () => {
  const { fileName, keys, keyPrefixes } = TRANSLATION_CONFIG.about;

  const { t } = useTranslation(fileName, { keyPrefix: keyPrefixes.aboutPage });

  const { whyBogeira, bogeiraInfo, photoAuthor, factList } = keys.aboutPage;

  return {
    whyBogeira: t(whyBogeira),
    bogeiraInfo: t(bogeiraInfo),
    photoAuthor: t(photoAuthor),
    factList: t(factList, { returnObjects: true }),
  };
};
