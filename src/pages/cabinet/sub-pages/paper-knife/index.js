import React from 'react';
import { withTranslation } from 'react-i18next';

import {
  Img1,
  Img2,
  Img3,
} from '../../../../assets/images/cabinet-objects/cabinet-objects-items/paper-knife';
import { useSubPages } from '../../../../hooks/use-sub-pages';
import { SubPageLayout } from '../../../../components/sub-page-layout';

const PaperKnife = props => {
  const images = [Img1, Img2, Img3];

  const data = useSubPages(props);

  return <SubPageLayout images={images} {...data} />;
};
export default withTranslation('cabinet', { keyPrefix: 'paper_knife' })(PaperKnife);
