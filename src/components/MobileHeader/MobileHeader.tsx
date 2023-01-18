import * as S from './MobileHeader.style';
import { MobileHeaderProps } from './MobileHeader.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const MobileHeader = ({ profileImg }: MobileHeaderProps) => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.MenuWrapper>
          <FontAwesomeIcon icon={faBars} />
        </S.MenuWrapper>
        <S.TitleWrapper>
          <S.Title>Prello</S.Title>
        </S.TitleWrapper>
        <S.ImgWrapper>
          <S.HeaderImg profileImg={profileImg} />
        </S.ImgWrapper>
      </S.Wrapper>
      <S.BoardName>First Board</S.BoardName>
    </S.Header>
  );
};
