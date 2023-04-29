import { useState } from 'react';

export const useAccordionControl = () => {
  const [isOpen, setOpen] = useState(false);

  const handleControl = () => {
    setOpen(!isOpen);
  };

  return {
    handleControl,
    isOpen,
  };
};
