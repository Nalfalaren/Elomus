import { forwardRef, InputHTMLAttributes } from 'react';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...props }, ref) => {
    return (
      <div>
        <input ref={ref} className={'input'} {...props} />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
