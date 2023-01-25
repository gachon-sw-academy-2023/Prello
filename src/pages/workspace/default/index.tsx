import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Button from '@/components/Button/Button';
import ProfileImg from '@/components/ProfileImg/ProfileImg';
import { Mobile, Default } from '@/utils/mediaQuery';
import { userSelector } from '@/utils/atom/userSelector';
import { useRecoilValue } from 'recoil';
export default function WorkspaceDefault() {
  const navigate = useNavigate();
  const user = useRecoilValue(userSelector);
  console.log(user);
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 워크스페이스</S.Title>
        <Mobile>
          <Button width={20} radius={'rounded'} color={'primary'} shadow={true}>
            + 새로운 워크스페이스
          </Button>
        </Mobile>
        <Default>
          <Button width={50} radius={'rounded'} color={'primary'} shadow={true}>
            + 새로운 워크스페이스
          </Button>
        </Default>
      </S.Wrapper>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
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
                <ProfileImg image="/assets/workspace/sample-profile-image.png" />
                <ProfileImg image="/assets/workspace/sample-profile-image.png" />
                <ProfileImg image="/assets/workspace/sample-profile-image.png" />
              </S.ProfileImages>
            </S.ItemContents>
          </S.Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <S.Item></S.Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <S.Item></S.Item>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <S.Item></S.Item>
        </Grid>
      </Grid>
    </S.Container>
  );
}
