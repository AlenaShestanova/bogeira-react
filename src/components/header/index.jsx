import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RoutesNames } from '../../routes/routes-names';
import classes from './header.module.scss';
import Logo from '../../assets/images/logo-icon.svg';
import Bogeira from '../../assets/images/bogeira.svg';
import { useTranslatedNavList } from '../../hooks/use-translated-nav-list';

export const Header = () => {
  const { i18n } = useTranslation();

  const navList = useTranslatedNavList();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={classes.header}>
      <NavLink to={RoutesNames.INDEX} className={classes.logoContainer}>
        <img src={Logo} id="icon-in-logo" className={classes.logoIcon} alt="bogeira-logo" />
        <img src={Bogeira} className={classes.logoBogeira} alt="bogeira-logo" />
      </NavLink>
      <div className={classes.navContainer}>
        {navList.map(({ url, title }, index) => (
          <NavLink to={url} key={index}>
            {title}
          </NavLink>
        ))}
        <div className={classes.langChangeContainer}>
          <button onClick={() => changeLanguage('ru')}>РУС</button>/
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>
    </header>
  );
};
