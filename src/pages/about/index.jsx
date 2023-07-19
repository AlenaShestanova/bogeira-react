import React from 'react';

import { useAbout } from './hooks/use-about';
import { FactsRender } from './components/facts-render';
import { Footer } from '../../components/footer';

import classes from './about.module.scss';
import { useResize } from '../../hooks/use-resize';

const About = () => {
  const { bogeiraInfo, whyBogeira, photoAuthor, factList } = useAbout();
  const { isMobile } = useResize();

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.info}>
        <span className={classes.name}>{whyBogeira}</span>
        <p>{bogeiraInfo}</p>
        <span className={classes.photo}>{photoAuthor}</span>
        <FactsRender facts={factList} />
      </div>
      <div className={classes.iraPhoto}></div>
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};
export default About;
