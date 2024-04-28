import React from 'react';

import { withTranslation } from 'react-i18next';

import { useSubPages } from '../../../../hooks/use-sub-pages';
import { Img1, Img2, Img3 } from '../../../../assets/images/jewelry/jewelry-items/aquarius';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const Aquarius = props => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages(props);

  return <SubPageLayout {...data} images={images} />;
};
export default withTranslation('jewelry', { keyPrefix: 'aquarius' })(Aquarius);
