import { HTMLAttributes, ReactNode } from 'react';
export interface SimpleModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClickToggleModal?: () => void;
}
