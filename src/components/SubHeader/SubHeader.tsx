import ROUTES from '@/routes';
import { Link } from 'react-router-dom';
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
        <Link to={ROUTES.MAIN}>
          <S.Title>Prello</S.Title>
        </Link>
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
