import * as S from './styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { Grid, Skeleton } from '@mui/material';
import SubTitle from '@/components/SubTitle/SubTitle';

export default function DetailSkeleton() {
  return (
    <S.RightContainer>
      <S.InfoContainer>
        <Skeleton variant="rectangular" width={65} height={65} />
        <S.InfoContents>
          <Skeleton variant="text">
            <SubTitle size="md">PIMPYPIMPY</SubTitle>
          </Skeleton>
          <Skeleton variant="text">
            <S.ExplainText>핌피팀입니당핌피팀입니당</S.ExplainText>
          </Skeleton>
        </S.InfoContents>
      </S.InfoContainer>
      <S.Line margin="0"></S.Line>
      <S.BoardContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <S.Item center={true} color={'#fffcff'}>
              <S.Image
                width={'50px'}
                height={'50px'}
                img={'/assets/workspace/sample-add-icon.png'}
              ></S.Image>
            </S.Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Skeleton variant="rounded" width="100%" height={60} />
            <Skeleton variant="rounded" width="100%" height={60} />
            <Skeleton variant="rounded" width="100%" height={60} />
            <Skeleton variant="rounded" width="100%" height={60} />
            <Skeleton variant="rounded" width="100%" height={60} />
            <Skeleton variant="rounded" width="100%" height={60} />
          </Grid>
        </Grid>
      </S.BoardContainer>
    </S.RightContainer>
  );
}
