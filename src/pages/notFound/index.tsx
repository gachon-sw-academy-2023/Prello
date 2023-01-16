import { Link, useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.Wrapper>
        <h1>권한이 없거나 존재하지 않는 페이지입니다.</h1>
        <S.BackBtn onClick={handleClick}>이전 페이지로</S.BackBtn>
      </S.Wrapper>
      <Link to="/">
        <S.Logo>PRELLO</S.Logo>
      </Link>
    </S.Container>
  );
}
