import { useTranslation } from 'react-i18next';

export const useTranslatedData = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  const WHY_BOGEIRA_TEXT = t('why_bogeira');
  const BOGEIRA_INFO_TEXT = t('bogeira_info');
  const PHOTO_AUTHOR_TEXT = t('photo_author');

  const FACT_LIST = t('fact_list', { returnObjects: true });

  return {
    WHY_BOGEIRA_TEXT,
    BOGEIRA_INFO_TEXT,
    PHOTO_AUTHOR_TEXT,
    FACT_LIST,
  };
};
