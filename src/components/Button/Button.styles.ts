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
  border-radius: 0.2rem;
  background-color: ${({ color }) => color && colors[color]};
  color: ${colors.white};
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
