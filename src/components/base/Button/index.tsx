import React from 'react';

import type { IButtonProps } from './type';

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const {
      variant = 'default',
      shape = 'default',
      disabled,
      children,
      ...rest
    } = props;

    const handleClassName = () => {
      let buttonClassName = 'button';
      if (variant !== 'default') {
        buttonClassName += ` button--${variant}`;
      }
      if (shape !== 'default') {
        buttonClassName += ` button--${shape}`;
      }
      return buttonClassName;
    };

    return (
      <button
        className={handleClassName()}
        disabled={disabled}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
export default Button;
