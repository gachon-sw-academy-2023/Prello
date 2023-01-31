import { IUser } from '@/recoil/atom/user';
import { HTMLAttributes } from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  user?: IUser;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  color?: 'primary' | 'white';
  backgroundColor?: 'white' | 'empty' | 'primary';
}
