import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SubTitleProps } from './SubTitle.types';

export const SubTitle = styled.h3<Omit<SubTitleProps, 'children'>>`
  font-weight: 600;
  font-family: 'LINESeedKR-Bd';
  margin: 10px 0;
  color: #4f4e4e;
  ${({ size }) =>
    size === 'sm'
      ? css`
          font-size: 16px;
        `
      : size === 'md'
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 24px;
        `}
`;
