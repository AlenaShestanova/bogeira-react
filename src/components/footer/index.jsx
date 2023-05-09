import React from 'react';
import { useTranslation } from 'react-i18next';

import { TRANSLATION_FILE_NAME } from '../../constants/translation-file-name';
import { footerKeys, keyPrefixes } from '../../constants/translation-keys';

import classes from './footer.module.scss';

export const Footer = ({ isHalfPage, className }) => {
  const { t } = useTranslation(TRANSLATION_FILE_NAME, { keyPrefix: keyPrefixes.footer });
  const { iraName } = footerKeys;

  const classNames = `${classes.footer} ${className} ${isHalfPage && classes.halfPage}`;

  const name = t(iraName);

  return (
    <footer className={classNames}>
      <span>{name}</span>
      <span>irabogolyubova@gmail.com</span>
    </footer>
  );
};
