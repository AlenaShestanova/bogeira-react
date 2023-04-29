import React from 'react';
import { useAccordionControl } from '../../hooks/use-accordion-control';
import { FactsDescriptionRenderer } from '../facts-render/partials/facts-description-renderer';
import styles from './../../about.module.scss';
import { FactsLabel } from '../facts-render/partials/facts-label';

export const Accordion = ({ label, items }) => {
  const { handleControl, isOpen } = useAccordionControl();

  return (
    <>
      <FactsLabel
        label={label}
        className={isOpen ? `${styles.openFactsLabel}` : ''}
        handleClick={handleControl}
      />
      <FactsDescriptionRenderer factsDescription={items} isOpen={isOpen} />
    </>
  );
};
