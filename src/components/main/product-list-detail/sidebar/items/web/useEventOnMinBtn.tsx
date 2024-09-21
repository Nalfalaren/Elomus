import { useRef } from 'react';

function useEventOnMinBtn({ minRef, maxRef }) {
  const getElemPos = () => {
    const minStyles = getComputedStyle(minRef.current);
    const leftOfMin = minStyles.getPropertyValue('--left');
    const rightOfMin = leftOfMin + parseInt(minStyles.width, 10);

    const maxStyles = getComputedStyle(maxRef.current);
    const rightOfMax = maxStyles.getPropertyValue('--right');

    return {
      leftOfMin,
      rightOfMin,
      rightOfMax,
    };
  };

  /* moving state */
  const isMoving = useRef(false);

  const handleMouseMove = (e) => {
    console.log(getElemPos());
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);

    /* load request here */
  };

  /* mouse event */
  const handleMouseDown = () => {
    /* change states */

    /* add moving events */
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return { handleMouseDown };
}

export default useEventOnMinBtn;
