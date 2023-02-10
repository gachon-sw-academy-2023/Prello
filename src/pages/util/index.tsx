import { Link, useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function Inform({ message }: { message: string }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.Wrapper>
        <h1>{message}</h1>
        <S.BackBtn onClick={handleClick}>이전 페이지로</S.BackBtn>
      </S.Wrapper>
      <Link to="/">
        <S.Logo>PRELLO</S.Logo>
      </Link>
    </S.Container>
  );
}
