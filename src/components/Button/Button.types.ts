import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: 'sm' | 'md' | 'lg' | 'xlg';
  width?: number;
  children: ReactNode;
  color?: 'white' | 'gradient' | 'empty' | 'primary' | 'notworking';
  radius?: 'square' | 'circle' | 'rounded';
  textColor?: 'white' | 'black' | 'primary' | 'darkgray';
  shadow?: boolean;
  onClick?: () => void;
}
