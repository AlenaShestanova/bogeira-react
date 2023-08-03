import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { RoutesNames } from '../../../routes/routes-names';
import Logo from '../../../assets/images/logo-icon.svg';
import Bogeira from '../../../assets/images/bogeira.svg';
import BackIcon from '../../../assets/images/back-icon.svg';
import { EN_LANGUAGE, RU_LANGUAGE } from '../../../constants/languages';
import { useHeader } from '../hooks/use-header';

import classes from '../header.module.scss';

export const MobileHeader = () => {
  const { navItems, handleChangeLanguage, language, handleGoBack } = useHeader();
  const { pathname } = useLocation();

  const isHomePage = pathname === RoutesNames.HOME;

  return (
    <header className={classes.mobileHeader}>
      <div className={classes.mobileHeader_withLogo}>
        <div className={classes.navigationContainer}>
          {!isHomePage && (
            <button onClick={handleGoBack} className={classes.backIcon}>
              <img src={BackIcon} alt="back-icon" />
            </button>
          )}
          <NavLink to={RoutesNames.INDEX} className={classes.logoContainer}>
            <img src={Logo} className={classes.logoIcon} alt="bogeira-logo" />
            <img src={Bogeira} className={classes.logoBogeira} alt="bogeira-logo" />
          </NavLink>
        </div>
        <div className={classes.langChangeContainer}>
          {language === RU_LANGUAGE ? (
            <button onClick={() => handleChangeLanguage(EN_LANGUAGE)}>EN</button>
          ) : (
            <button onClick={() => handleChangeLanguage(RU_LANGUAGE)}>РУС</button>
          )}
        </div>
      </div>
      {isHomePage && (
        <div className={classes.mobileHeader_menuItemsContainer}>
          {navItems.map(({ url, title }, index) => (
            <NavLink to={url} key={index} className={({ isActive }) => isActive && classes.active}>
              {title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};
