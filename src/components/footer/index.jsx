import React from 'react';
import { useTranslation } from 'react-i18next';

import { EMAIL } from '../../constants/email';
import classes from './footer.module.scss';
import { TRANSLATION_CONFIG } from '../../constants/tranlsation-config';

export const Footer = ({ isHalfPage, className }) => {
  const { fileName, keyPrefixes, keys } = TRANSLATION_CONFIG.footer;

  const { t } = useTranslation(fileName, { keyPrefix: keyPrefixes.footer });
  const { ira_name } = keys.footer;

  const classNames = `${classes.footer} ${className} ${isHalfPage && classes.halfPage}`;

  const name = t(ira_name);

  return (
    <footer className={classNames}>
      <span>{name}</span>
      <span>{EMAIL}</span>
    </footer>
  );
};
