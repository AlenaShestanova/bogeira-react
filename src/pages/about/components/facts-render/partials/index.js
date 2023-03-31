import React, { memo } from 'react';

import classes from '../../../about.module.scss';

export const FactsDescriptionRenderer = memo(({ factsDescription }) => {
  return (
    <>
      {factsDescription?.map(item => (
        <>
          {item} <br />
        </>
      ))}
    </>
  );
});
