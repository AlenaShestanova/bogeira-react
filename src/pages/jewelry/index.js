import { NavLink } from 'react-router-dom';

import { useJewelry } from './hooks/use-jewelry';
import { Footer } from '../../components/footer';
import { useResize } from '../../hooks/use-resize';

const Jewelery = () => {
  const { items } = useJewelry();
  const { isMobile } = useResize();

  return (
    <div className="generalContainerWithSubPages">
      {items.map(({ route, name, material, object, imgSrc }) => (
        <NavLink to={route} className="generalContainerWithSubPages_item">
          <div className="generalContainerWithSubPages_item_photoDescription">
            <div>{object} </div>
            <div>{name}</div>
            <div>{material}</div>
          </div>
          <img src={imgSrc} alt={name} />
        </NavLink>
      ))}
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};

export default Jewelery;
