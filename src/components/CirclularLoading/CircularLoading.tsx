import { CircularProgress } from '@mui/material';
import * as S from './CircularLoading.styles';

export const CircularLoading = () => {
  return (
    <S.Container>
      <CircularProgress size={60} sx={{ color: '#FCA4BE' }} />
      <S.LoadingText>Loading . . .</S.LoadingText>
    </S.Container>
  );
};
export default CircularLoading;
