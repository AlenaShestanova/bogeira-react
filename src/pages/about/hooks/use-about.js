import { useTranslation } from 'react-i18next';

import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';

export const useAbout = props => {
  const {
    aboutPage: { whyBogeira, bogeiraInfo, photoAuthor, factList },
  } = TRANSLATION_CONFIG.about;

  return {
    whyBogeira: props.t(whyBogeira),
    bogeiraInfo: props.t(bogeiraInfo),
    photoAuthor: props.t(photoAuthor),
    factList: props.t(factList, { returnObjects: true }),
  };
};
