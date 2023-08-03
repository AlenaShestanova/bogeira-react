import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { RoutesNames } from '../../../routes/routes-names';
import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';

export const useHeader = () => {
  const navigate = useNavigate();
  const { fileName, keyPrefixes, keys } = TRANSLATION_CONFIG.header;

  const { t, i18n } = useTranslation(fileName, {
    keyPrefix: keyPrefixes.header,
  });
  const { about, touch_by_touch, cabinet_objects, contacts, jewelry_pieces } = keys.header;

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

  const language = i18n.language;

  const handleGoBack = () => {
    navigate(-1);
  };

  return {
    navItems,
    handleChangeLanguage,
    language,
    handleGoBack,
  };
};
