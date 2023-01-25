import styled from '@emotion/styled';
import { MobileHeaderProps } from './MobileHeader.types';

export const Header = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  padding: 10px 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 30%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  color: #fca4be;
  font-size: 20px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.p`
  font-family: 'Rubik Bubbles', cursive;
  font-size: 25px;
  color: #fca4be;
  text-transform: uppercase;
  margin: 0;
`;

export const BoardName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #4f4e4e;
  margin: 3px 0px;
  font-size: 5px;
`;

export const HeaderImg = styled.img<MobileHeaderProps>`
  width: 30px;
  border-radius: 50%;
  content: url(${(props) => props.profileImg});
`;

export const SideMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background-color: #fca4be;

  div {
    width: 100%;
    padding: 20px;
    cursor: pointer;

    :hover {
      background-color: #e394ab;
    }
  }
`;
