import { HTMLAttributes } from 'react';
export type WrapperProps = {
  ratio?: number;
};

export type FooterImageProps = {
  img: string;
};

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  isMobile?: boolean;
}
