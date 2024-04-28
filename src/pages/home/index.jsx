import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';

import { useLocation } from 'react-router-dom';
import { ImgCard } from './components/img-card';
import { Footer } from '../../components/footer';
import { homeConfig } from './constants';

import logoClasses from '../start_page/start_page.module.scss';

import classes from './home.module.scss';
import Icon from '../../assets/images/logo-icon.svg';
import { useResize } from '../../hooks/use-resize';

const Home = props => {
  const [isOpening, setIsOpening] = useState(false);
  const { isMobile } = useResize();

  const location = useLocation();
  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeContainer_imgContainer}>
        {homeConfig.map(({ imgSrc, route, alt }) => (
          <ImgCard imgSrc={imgSrc} alt={alt} route={route} />
        ))}
      </div>
      {/*<img*/}
      {/*  src={Icon}*/}
      {/*  alt="bogeira-logo"*/}
      {/*  className={`${logoClasses.bogeiraLogo} ${isOpening && logoClasses.animation}`}*/}
      {/*/>*/}
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};
export default Home;
