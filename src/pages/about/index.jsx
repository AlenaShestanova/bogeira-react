import React from 'react';
import { useTranslatedData } from './hooks/use-translated-data';
import { FactsRender } from './components/facts-render';

import classes from './about.module.scss';

const About = props => {
  const { BOGEIRA_INFO_TEXT, PHOTO_AUTHOR_TEXT, WHY_BOGEIRA_TEXT, FACT_LIST } = useTranslatedData();

  return (
    <div className={classes.aboutContainer}>
      <span className={classes.name}>{WHY_BOGEIRA_TEXT}</span>
      <p>{BOGEIRA_INFO_TEXT}</p>
      <span className={classes.photo}>{PHOTO_AUTHOR_TEXT}</span>
      <FactsRender facts={FACT_LIST} />
    </div>
  );
};
export default About;
