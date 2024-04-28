import React from 'react';
import { withTranslation } from 'react-i18next';

import { Img1, Img2 } from '../../../../assets/images/jewelry/jewelry-items/rosemary';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Rosemary = props => {
  const images = [Img1, Img2];

  const data = useSubPages(props);

  return <SubPageLayout images={images} {...data} />;
};
export default withTranslation('jewelry', { keyPrefix: 'rosemary' })(Rosemary);
