import { JewelrySubPage } from '../../components/jewelry-sub-page';

import { Img1, Img2 } from '../../../../assets/images/jewelry/jewelry-items/maki';
import { useSubPages } from '../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';

const Maki = () => {
  const images = [Img1, Img2];

  const data = useSubPages({
    keyPrefix: jewelryKeyPrefixes.maki,
  });

  return <JewelrySubPage images={images} {...data} />;
};
export default Maki;
