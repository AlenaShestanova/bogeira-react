import React from 'react';
import { withTranslation } from 'react-i18next';

import {
  Img1,
  Img2,
  Img3,
  Img4,
} from '../../../../assets/images/jewelry/jewelry-items/health-nut-girl';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const HealthNutGirl = props => {
  const images = [Img1, Img2, Img3, Img4];

  const data = useSubPages(props);

  return <SubPageLayout images={images} {...data} />;
};
export default withTranslation('jewelry', { keyPrefix: 'health_nut_girl' })(HealthNutGirl);
