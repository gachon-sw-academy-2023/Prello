import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  color?: 'white' | 'gradient';
  radius?: 'square' | 'circle';
  textColor?: 'white' | 'black';
}
