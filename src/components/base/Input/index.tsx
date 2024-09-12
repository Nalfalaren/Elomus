import { forwardRef, InputHTMLAttributes } from 'react';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ ...props }, ref) => {
    return <input ref={ref} className={'input'} {...props} />;
  },
);

Input.displayName = 'Input';

export default Input;
