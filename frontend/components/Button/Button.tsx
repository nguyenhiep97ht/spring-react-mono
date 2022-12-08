import { ReactNode } from 'react';
import './Button.scss';
interface Props {
  type: 'submit' | 'button';
  children: string | ReactNode;
  loading?: boolean;
  disable?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

export function Button({ type, children, loading, disable, rightIcon, leftIcon }: Props) {
  return (
    <button type={type} disabled={disable} className="button button-primary">
      <span>
        {leftIcon ? leftIcon : undefined}
        {loading ? <div className="loader"></div> : children}
        {rightIcon ? rightIcon : undefined}
      </span>
    </button>
  );
}
