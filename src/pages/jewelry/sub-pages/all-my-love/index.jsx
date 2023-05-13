import { JewelrySubPage } from '../../components/jewelry-sub-page';

import { Img1, Img2 } from '../../../../assets/images/jewelry/jewelry-items/all-my-love';
import { useSubPages } from '../../hooks/use-sub-pages';
import { jewelryKeyPrefixes } from '../../../../constants/translation-keys';

const AllMyLove = () => {
  const images = [Img1, Img2];

  const data = useSubPages({
    keyPrefix: jewelryKeyPrefixes.all_my_love,
  });

  return <JewelrySubPage images={images} {...data} />;
};
export default AllMyLove;
