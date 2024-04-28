import React from 'react';
import { withTranslation } from 'react-i18next';

import { Img1, Img2 } from '../../../../assets/images/cabinet-objects/cabinet-objects-items/plate';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Plate = props => {
  const images = [Img1, Img2];

  const data = useSubPages(props);

  return <SubPageLayout images={images} {...data} />;
};
export default withTranslation('cabinet', { keyPrefix: 'plate' })(Plate);
