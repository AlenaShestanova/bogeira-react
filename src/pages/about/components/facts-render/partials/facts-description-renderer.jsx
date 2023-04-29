import React, { memo } from 'react';

import classes from '../../../about.module.scss';

export const FactsDescriptionRenderer = memo(({ factsDescription, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.openedAccordion}>
      {factsDescription?.map(item => (
        <>
          {item} <br />
        </>
      ))}
    </div>
  );
});
