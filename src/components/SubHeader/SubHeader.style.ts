import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SubHeaderProps } from './SubHeader.types';

export const Header = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  padding: 0px 30px;
  background: #ffffff;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderDiv = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`;

export const LeftHeaderDiv = styled(HeaderDiv)`
  justify-content: left;
`;

export const RightHeaderDiv = styled(HeaderDiv)`
  justify-content: right;
`;

export const Title = styled.p`
  font-family: 'Rubik Bubbles', cursive;
  font-size: 25px;
  color: #fca4be;
  text-transform: uppercase;
`;

export const Divider = styled.div`
  border-left: 1px solid #000000;
  height: 20px;
  margin: 0px 15px;
`;

export const BoardName = styled.p`
  color: #4f4e4e;
`;

export const SearchBar = styled.input<Omit<SubHeaderProps, 'children'>>`
  width: 298px;
  height: 55px;
  left: 1461px;
  top: 20px;

  background: #fcfbfa;
  border: none;
  border-radius: 10px;

  background-image: url(https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png);
  background-size: 10px;
  background-position: 10px center;
  background-repeat: no-repeat;
  padding-left: 40px;

  ${({ searchBar }) =>
    searchBar === true
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `}
`;

export const HeaderImg = styled.img<SubHeaderProps>`
  width: 7%;
  border-radius: 50%;
  margin-left: 30px;
  content: url(${(props) => props.profileImg});
`;
