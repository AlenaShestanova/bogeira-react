import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 920;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = event => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = width <= MOBILE_BREAKPOINT;

  return { isMobile };
};
