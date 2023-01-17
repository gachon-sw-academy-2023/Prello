import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: 'sm' | 'md' | 'lg';
  width?: number;
  children: ReactNode;
  color?: 'white' | 'gradient' | 'empty';
  radius?: 'square' | 'circle';
  textColor?: 'white' | 'black' | 'primary';
  onClick?: () => void;
}
