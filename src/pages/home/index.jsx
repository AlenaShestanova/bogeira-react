import React from 'react';
import classes from './home.module.scss';
import { Touch, Cabinet, Jewelry } from '../../assets/images/main';
import { ImgCard } from './components/img-card';
import { Footer } from '../../components/footer';

const Home = props => {
  return (
    <>
      <div className={classes.container}>
        <ImgCard src={Touch} alt="Кing in hand" />
        <ImgCard src={Jewelry} alt="Bracelet Health nut girl" />
        <ImgCard src={Cabinet} alt="Goblet Kazan" />
      </div>
      <Footer isHalfPage />
    </>
  );
};
export default Home;
