import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
  name: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className="radio">
        <input type="radio" ref={ref} {...props} />
        <span className="label"> {label}</span>
        <span className="checkmark"></span>
      </label>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
