import { HTMLAttributes, ReactNode } from 'react';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClickToggleModal?: () => void;
}
