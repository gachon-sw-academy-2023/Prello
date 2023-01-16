import styled from '@emotion/styled';
import colors from '@/styles/colors';

type TextProps = {
  color: 'primary' | 'white';
  backgroundColor: 'white' | 'empty';
};

// Header
export const HeaderContainer = styled.div<TextProps>`
  z-index: 9999;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7%;
  padding: 15px 20px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && colors[backgroundColor]};

  h1 {
    color: ${({ color }) => color && colors[color]};
    font-size: 25px;
    font-family: 'Rubik Bubbles', cursive;
  }

  button + button {
    margin-left: 10px;
  }

  span {
    color: #333;
    font-size: 14px;
    margin-right: 10px;
    font-family: 'LINESeedKR-Rg';
  }

  &.original {
    color: white;
  }

  &.change {
    background-color: white;
  }
`;
