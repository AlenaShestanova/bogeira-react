import React from 'react';
import classes from '../../about.module.scss';

import { FactsDescriptionRenderer } from './partials';
import { useOpenFacts } from '../../hooks/use-open-facts';

export const FactsRender = ({ facts }) => {
  const { handleItemClick, checkIsOpen } = useOpenFacts();

  if (!Array.isArray(facts)) return null;

  return (
    <>
      {facts?.map((item, index) => (
        <>
          <p onClick={() => handleItemClick(index)}>{item.label}</p>
          {checkIsOpen(index) && (
            <FactsDescriptionRenderer factsDescription={item?.description_item_list} />
          )}
        </>
      ))}
    </>
  );
};
