import React from 'react';

import { ImgCard } from './components/img-card';
import { Footer } from '../../components/footer';
import { homeConfig } from './constants';

import classes from './home.module.scss';

const Home = props => {
  return (
    <>
      <div className={classes.container}>
        {homeConfig.map(({ imgSrc, route, alt }) => (
          <ImgCard imgSrc={imgSrc} alt={alt} route={route} />
        ))}
      </div>
      <Footer isHalfPage />
    </>
  );
};
export default Home;
