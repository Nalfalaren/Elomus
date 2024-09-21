import React, { useEffect, useRef } from 'react';

import { Button } from 'react-bootstrap';
import './Range.scss';
import useEventOnMinBtn from './useEventOnMinBtn';

const range = {
    min: 0,
    max: 279
}

const Range = () => {
    /* button refs */
    const leftBtnRef = useRef(null);
    const rightBtnRef = useRef(null);

    const {handleMouseDown} = useEventOnMinBtn({minRef: leftBtnRef, maxRef: rightBtnRef})


  return (
    <div className="range">
      <button ref={leftBtnRef} className="range__left" onMouseDown={handleMouseDown}></button>
      <span></span>
      <button ref={rightBtnRef} className="range__right"></button>
    </div>
  );
};

export default Range;
