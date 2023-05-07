import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './footer.module.scss';

export const Footer = ({ isHalfPage, className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' });

  const classNames = `${classes.footer} ${className} ${isHalfPage && classes.halfPage}`;

  return (
    <footer className={classNames}>
      <span>{t('ira_name')}</span>
      <span>bogeira.art@gmail.com</span>
    </footer>
  );
};
