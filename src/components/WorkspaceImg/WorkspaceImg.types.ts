import { HTMLAttributes } from 'react';
export interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  radius: string;
  image: string;
}
