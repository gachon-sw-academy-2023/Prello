import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import ProfileImg from '@/components/ProfileImg/ProfileImg';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { Default, Mobile } from '@/utils/mediaQuery';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import * as S from '../default/styles';

function UserImages() {
  return (
    <Skeleton width="100%">
      <S.ProfileImages>
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
      </S.ProfileImages>
    </Skeleton>
  );
}

function WorkSpaceContainer() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <S.Item>
        <S.GradientBG></S.GradientBG>
        <S.ItemContents>
          <Skeleton width="100%">
            <S.Title>워크스페이스 이름</S.Title>
          </Skeleton>
          <Skeleton width="100%">
            <S.ItemBoardName>워크스페이스 설명</S.ItemBoardName>
          </Skeleton>
          <UserImages></UserImages>
        </S.ItemContents>
      </S.Item>
    </Grid>
  );
}

function WorkSpaceContainers() {
  return (
    <Grid container spacing={2}>
      <WorkSpaceContainer></WorkSpaceContainer>
      <WorkSpaceContainer></WorkSpaceContainer>
      <WorkSpaceContainer></WorkSpaceContainer>
      <WorkSpaceContainer></WorkSpaceContainer>
    </Grid>
  );
}

export default function WorkSpaceSkeleton() {
  return (
    <S.Container>
      <Default>
        <SubHeader
          divider={false}
          profileImg="assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="assets/authorization/pimfy_profile.png" />
      </Mobile>
      <S.ContentsWrapper>
        <S.Wrapper>
          <S.Title>나의 워크스페이스</S.Title>
          <Mobile>
            <Button
              width={20}
              radius={'rounded'}
              color={'primary'}
              shadow={true}
            >
              + 새로운 워크스페이스
            </Button>
          </Mobile>
          <Default>
            <Button
              width={50}
              radius={'rounded'}
              color={'primary'}
              shadow={true}
            >
              + 새로운 워크스페이스
            </Button>
          </Default>
        </S.Wrapper>
        <S.SubTitle>생성한 워크스페이스</S.SubTitle>
        <WorkSpaceContainers></WorkSpaceContainers>
        <S.SubTitle>참여한 워크스페이스</S.SubTitle>
        <WorkSpaceContainers></WorkSpaceContainers>
      </S.ContentsWrapper>
    </S.Container>
  );
}
