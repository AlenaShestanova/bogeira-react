import { useTranslation } from 'react-i18next';
import { RoutesNames } from '../../../routes/routes-names';

export const useTranslatedNavList = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'header' });

  return [
    {
      title: t('about'),
      url: RoutesNames.ABOUT,
    },
    {
      title: t('touch_by_touch'),
      url: RoutesNames.TOUCH_BY_TOUCH,
    },
    {
      title: t('jewelry_pieces'),
      url: RoutesNames.JEWELRY_PIECES,
    },
    {
      title: t('cabinet_objects'),
      url: RoutesNames.CABINET_OBJECTS,
    },
    {
      title: t('contacts'),
      url: RoutesNames.CONTACTS,
    },
  ];
};
