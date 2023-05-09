import { useTranslation } from 'react-i18next';

import { TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { keyPrefixes, aboutPageKeys } from '../../../constants/translation-keys';

export const useAbout = () => {
  const { t } = useTranslation(TRANSLATION_FILE_NAME, { keyPrefix: keyPrefixes.aboutPage });

  const { whyBogeira, bogeiraInfo, photoAuthor, factList } = aboutPageKeys;

  const WHY_BOGEIRA_TEXT = t(whyBogeira);
  const BOGEIRA_INFO_TEXT = t(bogeiraInfo);
  const PHOTO_AUTHOR_TEXT = t(photoAuthor);

  const FACT_LIST = t(factList, { returnObjects: true });

  return {
    WHY_BOGEIRA_TEXT,
    BOGEIRA_INFO_TEXT,
    PHOTO_AUTHOR_TEXT,
    FACT_LIST,
  };
};
