import colors from '@/styles/colors';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';

export const Container = styled.button<Omit<ButtonProps, 'children'>>`
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  border: none;
  display: inline-block;
  line-height: 1;
  background: ${({ color }) => color && colors[color]};
  color: ${({ textColor }) => textColor && colors[textColor]};
  padding-left: ${({ width }) => width}px;
  padding-right: ${({ width }) => width}px;
  text-align: center;
  font-family: 'LINESeedKR-Bd';
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
          border-radius: 0.5rem;
        `}
  ${({ height }) =>
    height === 'sm'
      ? css`
          font-size: 12px;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        `
      : height === 'md'
      ? css`
          font-size: 14px;
          padding-top: 0.7rem;
          padding-bottom: 0.7rem;
        `
      : css`
          font-size: 16px;
          padding-top: 1rem;
          padding-bottom: 1rem;
        `}
    ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    `}
`;
