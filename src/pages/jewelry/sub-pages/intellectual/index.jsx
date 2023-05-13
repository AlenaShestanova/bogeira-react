import { JewelrySubPage } from '../../components/jewelry-sub-page';

import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/intellectual';
import { useSubPages } from '../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';

const Intellectual = () => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages({
    keyPrefix: jewelryKeyPrefixes.intellectual,
  });

  return <JewelrySubPage images={images} {...data} />;
};
export default Intellectual;
