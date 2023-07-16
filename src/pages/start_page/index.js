import { useNavigate } from 'react-router-dom';

import Icon from '../../assets/images/logo-icon.svg';
import { RoutesNames } from '../../routes/routes-names';

import classes from './start_page.module.scss';

const StartPage = () => {
  const navigate = useNavigate();

  const handleOpen = () => {
    setTimeout(() => navigate(RoutesNames.HOME), 1000);
  };

  return <img src={Icon} alt="bogeira-logo" className={classes.bogeiraLogo} onClick={handleOpen} />;
};
export default StartPage;
