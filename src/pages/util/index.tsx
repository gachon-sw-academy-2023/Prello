import ROUTES from '@/routes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function Inform({ message }: { message: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviousState = location.key !== 'default';

  const handleClick = () => {
    if (hasPreviousState) {
      navigate(-1);
    } else {
      navigate(ROUTES.MAIN);
    }
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
