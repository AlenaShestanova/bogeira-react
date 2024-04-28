import React from 'react';

import { ImgCard } from './components/img-card';
import { Footer } from '../../components/footer';
import { homeConfig } from './constants';
import { useResize } from '../../hooks/use-resize';

import classes from './home.module.scss';

const Home = () => {
  const { isMobile } = useResize();

  return (
    <div className={classes.homeContainer}>
      <div className={classes.homeContainer_imgContainer}>
        {homeConfig.map(({ imgSrc, route, alt }) => (
          <ImgCard imgSrc={imgSrc} alt={alt} route={route} />
        ))}
      </div>
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};
export default Home;
