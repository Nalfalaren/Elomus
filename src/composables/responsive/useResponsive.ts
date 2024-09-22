import { useEffect, useState } from 'react';

export const IsRendered = (numberToRender: number) => {
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth > 992 ? numberToRender : 1);
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [numberToRender]);

  return itemsToShow;
};
