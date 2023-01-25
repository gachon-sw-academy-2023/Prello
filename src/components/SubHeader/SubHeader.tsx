import * as S from './SubHeader.style';
import { SubHeaderProps } from './SubHeader.types';
export const SubHeader = ({
  profileImg,
  searchBar,
  divider,
  children,
}: SubHeaderProps) => {
  return (
    <S.Header>
      <S.LeftHeaderDiv>
        <S.Title>Prello</S.Title>
        {divider && <S.Divider />}
        <S.BoardName>{children}</S.BoardName>
      </S.LeftHeaderDiv>
      <S.RightHeaderDiv>
        <S.SearchBar placeholder="Search" searchBar={searchBar} />
        <S.HeaderImg profileImg={profileImg} />
      </S.RightHeaderDiv>
    </S.Header>
  );
};
