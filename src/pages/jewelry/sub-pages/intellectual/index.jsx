import React from 'react';
import { withTranslation } from 'react-i18next';

import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/intellectual';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Intellectual = props => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages(props);

  return <SubPageLayout images={images} {...data} />;
};
export default withTranslation('jewelry', { keyPrefix: 'intellectual_and_stylish' })(Intellectual);
