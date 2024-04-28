import { useState } from 'react';

export const WithHoverImg = ({ imgUrl, imgHoverUrl }) => {
  const [isHover, setHover] = useState(false);

  const handleSetHover = () => {
    setHover(true);
  };

  const handleRemoveHover = () => {
    setHover(false);
  };

  return (
    <div onMouseOver={handleSetHover} onMouseLeave={handleRemoveHover}>
      {!isHover && <img src={imgUrl} alt="photo" />}
      {isHover && <img src={imgHoverUrl} alt="photo" />}
    </div>
  );
};
