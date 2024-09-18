import React from 'react';
import './Feedback.scss';
import HighBreakpointSlider from './Item/HighBreakpointSlider';
import LowBreakpointSlider from './Item/LowBreakpointSlider';

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback__title">
        <p>WELCOME TO MY PERSONAL PRESENTATION</p>
        <h2>
          WHAT OUR <span>CLIENTS SAY</span>
        </h2>
      </div>
      <div className="feedback__carousel">
        {window.innerWidth > 992 ? (
          <HighBreakpointSlider />
        ) : (
          <LowBreakpointSlider />
        )}
      </div>
    </div>
  );
};

export default Feedback;
