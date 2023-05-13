import React from 'react';
import { NavLink } from 'react-router-dom';

import { Footer } from '../../components/footer';
import { useCabinet } from './hooks/use-cabinet';

const Cabinet = () => {
  const { items } = useCabinet();

  return (
    <div className="generalContainerWithSubPages">
      {items.map(({ route, name, material, object, imgSrc }) => (
        <NavLink to={route} className="generalContainerWithSubPages_item">
          <div className="generalContainerWithSubPages_item_photoDescription">
            {object} <br />
            {name} <br />
            {material}
          </div>
          <img src={imgSrc} alt={name} />
        </NavLink>
      ))}
      <Footer isHalfPage />
    </div>
  );
};
export default Cabinet;
