import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import Footer from '../../components/footer';
import { useCabinet } from './hooks/use-cabinet';
import { useResize } from '../../hooks/use-resize';

const Cabinet = props => {
  const { items } = useCabinet(props);
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
          <div className="generalContainerWithSubPages_item_imgContainer">
            <img src={imgSrc} alt={name} />
          </div>
        </NavLink>
      ))}
      <Footer isHalfPage={!isMobile} />
    </div>
  );
};
export default withTranslation('cabinet')(Cabinet);
