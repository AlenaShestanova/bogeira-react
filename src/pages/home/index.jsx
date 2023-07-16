import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { ImgCard } from './components/img-card';
import { Footer } from '../../components/footer';
import { homeConfig } from './constants';

import logoClasses from '../start_page/start_page.module.scss';

import classes from './home.module.scss';
import Icon from '../../assets/images/logo-icon.svg';

const Home = props => {
  const [isOpening, setIsOpening] = useState(false);

  const location = useLocation();
  console.log(location, 'LOCATION');
  return (
    <>
      <div className={classes.container}>
        {homeConfig.map(({ imgSrc, route, alt }) => (
          <ImgCard imgSrc={imgSrc} alt={alt} route={route} />
        ))}
      </div>
      <img
        src={Icon}
        alt="bogeira-logo"
        className={`${logoClasses.bogeiraLogo} ${isOpening && logoClasses.animation}`}
      />
      <Footer isHalfPage />
    </>
  );
};
export default Home;
