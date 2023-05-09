import React from 'react';

import { useAbout } from './hooks/use-about';
import { FactsRender } from './components/facts-render';
import { Footer } from '../../components/footer';

import classes from './about.module.scss';

const About = props => {
  const { BOGEIRA_INFO_TEXT, PHOTO_AUTHOR_TEXT, WHY_BOGEIRA_TEXT, FACT_LIST } = useAbout();

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.info}>
        <span className={classes.name}>{WHY_BOGEIRA_TEXT}</span>
        <p>{BOGEIRA_INFO_TEXT}</p>
        <span className={classes.photo}>{PHOTO_AUTHOR_TEXT}</span>
        <FactsRender facts={FACT_LIST} />
      </div>
      <div className={classes.iraPhoto}></div>
      <Footer isHalfPage />
    </div>
  );
};
export default About;
