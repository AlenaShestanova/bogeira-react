import { JewelrySubPage } from '../../components/jewelry-sub-page';

import {
  Img1,
  Img2,
  Img3,
  Img4,
} from '../../../../assets/images/jewelry/jewelry-items/health-nut-girl';
import { useSubPages } from '../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';

const HealthNutGirl = () => {
  const images = [Img1, Img2, Img3, Img4];

  const data = useSubPages({
    keyPrefix: jewelryKeyPrefixes.health_nut_girl,
  });

  return <JewelrySubPage images={images} {...data} />;
};
export default HealthNutGirl;
