import { useState } from 'react';

export const useOpenFacts = () => {
  const [openItemIndexes, setOpenItemIndexes] = useState([]);

  const handleItemClick = index => {
    const isOpen = checkIsOpen(index);

    if (isOpen) {
      handleClose(index);
      return;
    }

    handleOpen(index);
  };

  const checkIsOpen = index => openItemIndexes.includes(index);

  const handleClose = index => {
    const updatedOpenItemIndexes = [...openItemIndexes].filter(item => item !== index);

    setOpenItemIndexes(updatedOpenItemIndexes);
  };

  const handleOpen = index => {
    setOpenItemIndexes(prev => [...prev, index]);
  };

  return {
    handleItemClick,
    checkIsOpen,
  };
};
