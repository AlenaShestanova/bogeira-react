import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from '../header.module.scss';
import { RoutesNames } from '../../../routes/routes-names';
import Logo from '../../../assets/images/logo-icon.svg';
import Bogeira from '../../../assets/images/bogeira.svg';

import { useHeader } from '../hooks/use-header';
import { withTranslation } from 'react-i18next';

const DesktopHeader = props => {
  const { navItems, setRULanguage, setENLanguage } = useHeader(props);

  return (
    <header className={classes.header}>
      <NavLink to={RoutesNames.INDEX} className={classes.logoContainer}>
        <img src={Logo} className={classes.logoIcon} alt="bogeira-logo" />
        <img src={Bogeira} className={classes.logoBogeira} alt="bogeira-logo" />
      </NavLink>
      <div className={classes.navContainer}>
        {navItems.map(({ url, title }, index) => (
          <NavLink to={url} key={index} className={({ isActive }) => isActive && classes.active}>
            {title}
          </NavLink>
        ))}
        <div className={classes.langChangeContainer}>
          <button onClick={setRULanguage}>РУС</button>/<button onClick={setENLanguage}>EN</button>
        </div>
      </div>
    </header>
  );
};
export default withTranslation('header')(DesktopHeader);
