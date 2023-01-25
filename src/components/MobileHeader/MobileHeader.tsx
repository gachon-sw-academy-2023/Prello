import * as S from './MobileHeader.style';
import { MobileHeaderProps } from './MobileHeader.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const MobileHeader = ({ profileImg }: MobileHeaderProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <S.Header>
      <S.Wrapper>
        <S.MenuWrapper>
          <FontAwesomeIcon onClick={handleClick} icon={faBars} />
        </S.MenuWrapper>
        <S.TitleWrapper>
          <S.Title>Prello</S.Title>
        </S.TitleWrapper>
        <S.ImgWrapper>
          <S.HeaderImg profileImg={profileImg} />
        </S.ImgWrapper>
      </S.Wrapper>
      <S.BoardName>First Board</S.BoardName>

      {open ? (
        <S.SideMenuWrapper>
          <div>Workspace</div>
          <div>Members</div>
          <div>Settings</div>
        </S.SideMenuWrapper>
      ) : (
        <></>
      )}
    </S.Header>
  );
};
