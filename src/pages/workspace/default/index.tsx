import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function WorkspaceDefault() {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 워크스페이스</S.Title>
        <S.CreateButton>+ 새로운 워크스페이스</S.CreateButton>
      </S.Wrapper>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <S.Item
            onClick={() => {
              navigate('/workspace-detail');
            }}
          >
            <S.GradientBG></S.GradientBG>
            <S.ItemContents>
              <S.Title>MOKA</S.Title>
              <S.ItemBoardName>First Board</S.ItemBoardName>
              <S.ProfileImages>
                <S.ProfileImage></S.ProfileImage>
                <S.ProfileImage></S.ProfileImage>
                <S.ProfileImage></S.ProfileImage>
              </S.ProfileImages>
            </S.ItemContents>
          </S.Item>
        </Grid>
        <Grid item xs={3}>
          <S.Item></S.Item>
        </Grid>
        <Grid item xs={3}>
          <S.Item></S.Item>
        </Grid>
        <Grid item xs={3}>
          <S.Item></S.Item>
        </Grid>
      </Grid>
    </S.Container>
  );
}
