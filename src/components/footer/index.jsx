import React from 'react';
import { withTranslation } from 'react-i18next';

import { EMAIL } from '../../constants/email';
import classes from './footer.module.scss';
import { useResize } from '../../hooks/use-resize';

const Footer = ({ isHalfPage, className, ...props }) => {
  const classNames = `${classes.footer} ${className} ${isHalfPage && classes.halfPage}`;

  const name = props.t('ira_name');

  return (
    <footer className={classNames}>
      <span>{name}</span>
      <span>{EMAIL}</span>
    </footer>
  );
};
export default withTranslation('footer')(Footer);
