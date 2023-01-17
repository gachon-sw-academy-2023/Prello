import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export interface SubHeaderProps extends HTMLAttributes<HTMLDivElement> {
  searchBar?: boolean;
  profileImg?: string;
}
