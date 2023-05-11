import { useTranslation } from 'react-i18next';

import { RoutesNames } from '../../../routes/routes-names';
import { TRANSLATION_FILE_NAME } from '../../../constants/translation-file-name';
import { headerKeys, keyPrefixes } from '../../../constants/translation-keys';

export const useHeader = () => {
  const { t, i18n } = useTranslation(TRANSLATION_FILE_NAME, { keyPrefix: keyPrefixes.header });
  const { about, touch_by_touch, cabinet_objects, contacts, jewelry_pieces } = headerKeys;

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    {
      title: t(about),
      url: RoutesNames.ABOUT,
    },
    {
      title: t(touch_by_touch),
      url: RoutesNames.TOUCH_BY_TOUCH,
    },
    {
      title: t(jewelry_pieces),
      url: RoutesNames.JEWELRY,
    },
    {
      title: t(cabinet_objects),
      url: RoutesNames.CABINET_OBJECTS,
    },
    {
      title: t(contacts),
      url: RoutesNames.CONTACTS,
    },
  ];

  return {
    navItems,
    handleChangeLanguage,
  };
};
