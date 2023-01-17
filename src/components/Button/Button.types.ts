import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  color?: 'white' | 'gradient' | 'empty';
  radius?: 'square' | 'circle';
  textColor?: 'white' | 'black' | 'primary';
  onClick?: () => void;
}
