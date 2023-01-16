import colors from '@/styles/colors';
import { flexCenter } from '@/styles/shared/flex';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';

export const Container = styled.button<Omit<ButtonProps, 'children'>>`
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border: none;
  ${flexCenter}
  background: ${({ color }) => color && colors[color]};
  color: ${({ textColor }) => textColor && colors[textColor]};
  ${({ radius }) =>
    radius === 'square'
      ? css`
          border-radius: 0.2rem;
        `
      : radius === 'circle'
      ? css`
          border-radius: 2rem;
        `
      : css`
          border-radius: 0%;
        `}
  ${({ size }) =>
    size === 'sm'
      ? css`
          padding: 0.5rem 1.5rem;
        `
      : size === 'md'
      ? css`
          padding: 0.7rem 2rem;
        `
      : css`
          padding: 1rem 2.5rem;
        `}
`;
