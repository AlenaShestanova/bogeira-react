import React from 'react';
import { withTranslation } from 'react-i18next';

import { AboutSubPage } from '../../components/about-sub-page';
import { useAboutSubPage } from '../../hooks/use-about-sub-page';
import { imageConfig } from './constants';

const Sculpture = props => {
  const { items, label } = useAboutSubPage(props);

  const itemsWithImg = items.map(item => ({
    ...item,
    imgUrl: imageConfig[item.img],
    imgHoverUrl: imageConfig[item.img_hover],
  }));
  return <AboutSubPage label={label} items={itemsWithImg} />;
};
export default withTranslation('about', { keyPrefix: 'sculpture' })(Sculpture);
