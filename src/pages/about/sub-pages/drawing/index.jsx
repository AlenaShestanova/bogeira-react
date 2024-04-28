import React from 'react';
import { withTranslation } from 'react-i18next';

import { AboutSubPage } from '../../components/about-sub-page';
import { useAboutSubPage } from '../../hooks/use-about-sub-page';
import { imageConfig } from './constants';

const Drawing = props => {
  const { items, label } = useAboutSubPage(props);

  const itemsWithImg = items.map(item => ({
    ...item,
    imgUrl: imageConfig[item.img],
  }));

  return <AboutSubPage label={label} items={itemsWithImg} />;
};
export default withTranslation('about', { keyPrefix: 'drawing' })(Drawing);
