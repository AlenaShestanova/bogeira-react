import { NavLink } from 'react-router-dom';

import { useJewelry } from './hooks/use-jewelry';
import { Footer } from '../../components/footer';

import classes from './jewelry.module.scss';

const Jewelery = () => {
  const { items } = useJewelry();

  return (
    <div className={classes.jewelryContainer}>
      {items.map(({ route, name, material, object, imgSrc }) => (
        <NavLink to={route} className={classes.item}>
          <div className={classes.photoDescription}>
            {object} <br /> {name} <br />
            {material}
          </div>
          <img src={imgSrc} alt={name} />
        </NavLink>
      ))}
      <Footer isHalfPage />
    </div>
  );
};

export default Jewelery;
