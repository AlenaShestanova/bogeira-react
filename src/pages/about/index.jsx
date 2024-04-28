import React from 'react';
import { withTranslation } from 'react-i18next';

import { useAbout } from './hooks/use-about';
import { FactsRender } from './components/facts-render';
import { Footer } from '../../components/footer';
import { useResize } from '../../hooks/use-resize';

import classes from './about.module.scss';

const About = props => {
  const { bogeiraInfo, whyBogeira, photoAuthor, factList } = useAbout(props);
  const { isMobile } = useResize();

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.info}>
        <span className={classes.name}>{whyBogeira}</span>
        <p>{bogeiraInfo}</p>
        <FactsRender facts={factList} />
        <span className={classes.photo}>{photoAuthor}</span>
      </div>
      <div className={classes.iraPhoto}></div>
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};
export default withTranslation('about', { keyPrefix: 'about' })(About);
