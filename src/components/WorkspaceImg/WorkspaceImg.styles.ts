import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ImageProps } from './WorkspaceImg.types';

export const RworkspaceImg = styled.div<ImageProps>`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-size: cover;
  background-image: url(${(props) => props.image});
  ${({ size }) =>
    size === 'sm'
      ? css`
          width: 50px;
          height: 50px;
        `
      : size === 'md'
      ? css`
          width: 65px;
          height: 65px;
        `
      : css`
          width: 80px;
          height: 80px;
        `}

  ${({ radius }) =>
    radius === 'rounded'
      ? css`
          border-radius: 16px;
        `
      : radius === 'round'
      ? css`
          border-radius: 100px;
        `
      : css`
          border-radius: 0;
        `}
`;
