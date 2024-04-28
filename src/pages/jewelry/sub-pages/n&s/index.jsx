import React from 'react';
import { withTranslation } from 'react-i18next';

import { Img1, Img2, Img3, Img4 } from '../../../../assets/images/jewelry/jewelry-items/n&s';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Ns = props => {
  const images = [Img1, Img2, Img3, Img4];

  const data = useSubPages(props);
  return <SubPageLayout {...data} images={images} />;
};
export default withTranslation('jewelry', { keyPrefix: 'n&s' })(Ns);
