import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import SubTitle from '@/components/SubTitle/SubTitle';
import { workspaceSelector } from '@/recoil/atom/workspaceSelector';
import { Default, Mobile } from '@/utils/mediaQuery';
import { IWorkspace } from '@/utils/types';
import { Grid, Skeleton } from '@mui/material';
import { useRecoilValue } from 'recoil';
import * as S from './styles';

export default function DetailSkeleton() {
  const workspace = useRecoilValue<IWorkspace>(workspaceSelector);
  return (
    <S.Container>
      <Default>
        <SubHeader
          divider={true}
          children="Workspace"
          profileImg="/assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="/assets/authorization/pimfy_profile.png" />
      </Mobile>
      <S.Wrapper>
        <SideBar
          workspaceName={workspace.name}
          memberInfo={workspace.memberInfo}
          // onModal={handleModal}
          // onNavigate={() => handleNavigate(workspaceId)}
        />
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
              {[1, 2, 3, 4, 5].map((idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <S.Item center={false} color={'#ffe7ee'}>
                    <Skeleton variant="text" width="100%">
                      <S.TitleInput disabled={true}></S.TitleInput>
                    </Skeleton>
                  </S.Item>
                </Grid>
              ))}
            </Grid>
          </S.BoardContainer>
        </S.RightContainer>
      </S.Wrapper>
    </S.Container>
  );
}
