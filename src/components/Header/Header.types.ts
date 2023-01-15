import { HTMLAttributes } from 'react';
type User = {
  name: string;
};

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  color?: 'primary' | 'white';
  backgroundColor?: 'white' | 'empty';
}
