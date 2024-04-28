import { aboutSubPagesTranslationKeys } from '../../../constants/general-translation-keys';

export const useAboutSubPage = props => {
  const { label: labelText, photoDescriptions } = aboutSubPagesTranslationKeys;

  const descriptions = props.t(photoDescriptions, { returnObjects: true });

  const label = props.t(labelText);

  let items = [];

  if (Array.isArray(descriptions)) {
    items = descriptions;
  }

  return { items, label };
};
