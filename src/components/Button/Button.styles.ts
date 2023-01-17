import colors from '@/styles/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';

export const Container = styled.button<Omit<ButtonProps, 'children'>>`
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border: none;
  display: inline-block;
  /* font-weight: 700; */
  line-height: 1;
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

  &.button--sm {
    font-size: 12px;
  }

  &.button--md {
    font-size: 14px;
  }

  &.button--lg {
    font-size: 16px;
  }
`;
