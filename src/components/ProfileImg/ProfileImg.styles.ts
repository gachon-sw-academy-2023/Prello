import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ImageProps } from './ProfileImg.types';

export const ProfileImg = styled.div<ImageProps>`
  margin-right: 10px;
  background-size: cover;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  ${({ size }) =>
    size === 'sm'
      ? css`
          width: 30px;
          height: 30px;
        `
      : size === 'md'
      ? css`
          width: 35px;
          height: 35px;
        `
      : css`
          width: 40px;
          height: 40px;
        `}
`;
