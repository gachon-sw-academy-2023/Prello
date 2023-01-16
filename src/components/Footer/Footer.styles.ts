import styled from '@emotion/styled';
import { WrapperProps, FooterImageProps } from './Footer.types';

export const FooterContainer = styled.div`
  background-color: rgba(252, 164, 190, 0.25);
`;

export const ColWrapper = styled.div<WrapperProps>`
  display: flex;
  height: ${(props) => props.ratio}%;
  margin-left: 5%;
`;

export const RowWrapper = styled.div<WrapperProps>`
  display: flex;
  width: ${(props) => props.ratio}%;
  height: 100%;

  h1 {
    margin-top: 30px;
    font-size: 30px;
    color: black;
    font-family: 'Rubik Bubbles', cursive;
  }

  span {
    font-size: 14px;
    padding-right: 30px;
    font-family: 'LINESeedKR-Rg';
  }
`;

export const CopyrightWrapper = styled(RowWrapper)`
  align-items: center;
  margin-top: 5%;
  margin-bottom: 30px;
`;

export const TextWrapper = styled(RowWrapper)`
  display: inline-block;
  margin-right: 5%;

  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin-top: 5px;
  }
`;

export const ImageWrapper = styled(RowWrapper)`
  justify-content: space-between;
  align-items: center;
  margin-left: 15%;
  margin-right: 5%;
  margin-top: 5%;
`;

export const FooterImage = styled.img<FooterImageProps>`
  width: 20px;
  height: 20px;
  margin-right: 30px;
  content: url(${(props) => props.img});
`;
