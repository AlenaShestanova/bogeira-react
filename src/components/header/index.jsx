import React from 'react';

import { useResize } from '../../hooks/use-resize';
import { MobileHeader } from './mobile/';
import DesktopHeader from './desktop';

export const Header = () => {
  const { isMobile } = useResize();

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};
