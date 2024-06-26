import { useNavigate } from 'react-router-dom';

import { RoutesNames } from '../../../routes/routes-names';
import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';
import { EN_LANGUAGE, RU_LANGUAGE } from '../../../constants/languages';

export const useHeader = props => {
  const navigate = useNavigate();

  const { about, touch_by_touch, cabinet_objects, contacts, jewelry_pieces } =
    TRANSLATION_CONFIG.header;

  const setRULanguage = () => {
    props.i18n.changeLanguage(RU_LANGUAGE);
  };

  const setENLanguage = () => {
    props.i18n.changeLanguage(EN_LANGUAGE);
  };

  const navItems = [
    {
      title: props.t(about),
      url: RoutesNames.ABOUT,
    },
    {
      title: props.t(touch_by_touch),
      url: RoutesNames.TOUCH_BY_TOUCH,
    },
    {
      title: props.t(jewelry_pieces),
      url: RoutesNames.JEWELRY,
    },
    {
      title: props.t(cabinet_objects),
      url: RoutesNames.CABINET_OBJECTS,
    },
    {
      title: props.t(contacts),
      url: RoutesNames.CONTACTS,
    },
  ];

  const language = props.i18n.language;

  const handleGoBack = () => {
    navigate(-1);
  };

  return {
    navItems,
    setRULanguage,
    setENLanguage,
    language,
    handleGoBack,
  };
};
