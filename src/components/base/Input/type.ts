export type ButtonIconShape = 'default' | 'circle';
export type ButtonVariantType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'outlined';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  shape?: ButtonIconShape;
}
