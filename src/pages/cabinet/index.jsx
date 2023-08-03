import React from 'react';
import { NavLink } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { useCabinet } from './hooks/use-cabinet';
import { useResize } from '../../hooks/use-resize';

const Cabinet = () => {
  const { items } = useCabinet();
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
export default Cabinet;
