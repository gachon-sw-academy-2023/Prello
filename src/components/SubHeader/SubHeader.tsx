import * as S from './SubHeader.style';
import { SubHeaderProps } from './SubHeader.types';
export const SubHeader = ({ profileImg, searchBar }: SubHeaderProps) => {
  return (
    <S.Header>
      <S.LeftHeaderDiv>
        <S.Title>Prello</S.Title>
        <S.Divider />
        <S.BoardName>First Board</S.BoardName>
      </S.LeftHeaderDiv>
      <S.RightHeaderDiv>
        <S.SearchBar placeholder="Search" searchBar={searchBar} />
        <S.HeaderImg profileImg={profileImg} />
      </S.RightHeaderDiv>
    </S.Header>
  );
};
