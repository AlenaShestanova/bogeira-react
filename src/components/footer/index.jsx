import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' });

  return (
    <footer className={classes.footer}>
      <span>{t('ira_name')}</span>
      <span>bogeira.art@gmail.com</span>
    </footer>
  );
};
