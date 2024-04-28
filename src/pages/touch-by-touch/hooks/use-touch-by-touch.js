import {
  Img1,
  Img2,
  Img3,
  Img5,
  Img4,
  Img6,
  Img8,
  Img9,
  Img7,
  Img13,
  Img12,
  Img11,
  Img10,
} from '../../../assets/images/touch-by-touch';
import { TRANSLATION_CONFIG } from '../../../constants/tranlsation-config';

export const useTouchByTouch = props => {
  const {
    keys: { name, material, description, photo },
  } = TRANSLATION_CONFIG.touch_by_touch;

  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13];

  return {
    images,
    name: props.t(name),
    material: props.t(material),
    description: props.t(description),
    photo: props.t(photo),
  };
};
