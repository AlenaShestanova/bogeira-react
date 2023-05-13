import React from 'react';

import { useAbout } from './hooks/use-about';
import { FactsRender } from './components/facts-render';
import { Footer } from '../../components/footer';

import classes from './about.module.scss';

const About = () => {
  const { bogeiraInfo, whyBogeira, photoAuthor, factList } = useAbout();

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.info}>
        <span className={classes.name}>{whyBogeira}</span>
        <p>{bogeiraInfo}</p>
        <span className={classes.photo}>{photoAuthor}</span>
        <FactsRender facts={factList} />
      </div>
      <div className={classes.iraPhoto}></div>
      <Footer isHalfPage />
    </div>
  );
};
export default About;
