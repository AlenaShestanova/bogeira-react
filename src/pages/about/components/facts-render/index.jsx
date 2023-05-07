import React from 'react';

import { Accordion } from '../accordion';
import { FactsLabel } from './partials/facts-label';
import classes from '../../about.module.scss';

export const FactsRender = ({ facts }) => {
  if (!Array.isArray(facts)) return null;

  return (
    <div className={classes.factsRendererContainer}>
      {facts?.map(item => {
        if (item.description_item_list)
          return <Accordion label={item.label} items={item?.description_item_list} />;

        return <FactsLabel label={item.label} url={item.pageUrl} />;
      })}
    </div>
  );
};
