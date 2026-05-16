import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`button ${className}`} type="button" {...props}>
      {children}
    </button>
  );
}
