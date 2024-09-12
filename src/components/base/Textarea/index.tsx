import { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from 'react';

export type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return <textarea ref={ref} {...props} className="textarea" />;
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
