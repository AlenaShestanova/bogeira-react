import { productDetailInfoKeys } from '../constants/general-translation-keys';

export const useSubPages = props => {
  const { name, material, description, photo, object } = productDetailInfoKeys;

  return {
    name: props.t(name),
    material: props.t(material),
    description: props.t(description),
    photo: props.t(photo),
    object: props.t(object),
  };
};
