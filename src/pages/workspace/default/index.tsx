import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import ProfileImg from '@/components/ProfileImg/ProfileImg';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { userSelector } from '@/recoil/atom/userSelector';
import { Default, Mobile } from '@/utils/mediaQuery';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CreateWorkspace from '../../../components/Modals/CreateModal/CreateModal';
import * as S from './styles';

function UserImages(props: any) {
  console.log(props.members);
  if (props.members.length > 3)
    return (
      <>
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
      </>
    );
  props.members.map(() => {
    return <ProfileImg image="/assets/workspace/sample-profile-image.png" />;
  });

  return <></>;
}

export default function WorkspaceDefault() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();
  const [cWorkspaces, setCWorkspaces] = useState<any>();
  const [pWorkspaces, setPWorkspaces] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const fetchWorkspaces = async () => {
    try {
      setError(null);
      setCWorkspaces(null);
      setPWorkspaces(null);
      setLoading(true);

      const response = await axios.get('/workspace/list');
      if (response.status === 200) {
        setCWorkspaces(response.data);
      }

      const response2 = await axios.get('/workspace/list/participate');
      if (response2.status === 200) {
        setPWorkspaces(response.data);
      }
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  const handleNavigate = () => {
    navigate('/workspace-detail');
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!pWorkspaces && !cWorkspaces) return null;

  return (
    <S.Container>
      <Default>
        <SubHeader
          divider={false}
          profileImg="assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="public/assets/authorization/pimfy_profile.png" />
      </Mobile>
      {isOpenModal && (
        <CreateWorkspace
          setOpenModal={setOpenModal}
          fetchWorkspaces={fetchWorkspaces}
        ></CreateWorkspace>
      )}
      <S.ContentsWrapper>
        <S.Wrapper>
          <S.Title>나의 워크스페이스</S.Title>
          <Mobile>
            <Button
              width={20}
              radius={'rounded'}
              color={'primary'}
              shadow={true}
              onClick={handleModal}
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
              onClick={handleModal}
            >
              + 새로운 워크스페이스
            </Button>
          </Default>
        </S.Wrapper>

        <S.SubTitle>생성한 워크스페이스</S.SubTitle>
        <Grid container spacing={2}>
          {cWorkspaces.map((workspace: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={workspace.id}>
              <S.Item onClick={handleNavigate}>
                <S.GradientBG></S.GradientBG>
                <S.ItemContents>
                  <S.Title>{workspace.name}</S.Title>
                  <S.ItemBoardName>{workspace.summary}</S.ItemBoardName>
                  <S.ProfileImages>
                    <UserImages members={workspace.memberInfo}></UserImages>
                  </S.ProfileImages>
                </S.ItemContents>
              </S.Item>
            </Grid>
          ))}
        </Grid>
        <S.SubTitle>참여한 워크스페이스</S.SubTitle>
        <Grid container spacing={2}>
          {pWorkspaces.map((workspace: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={workspace.id}>
              <S.Item onClick={handleNavigate}>
                <S.GradientBG></S.GradientBG>
                <S.ItemContents>
                  <S.Title>{workspace.name}</S.Title>
                  <S.ItemBoardName>{workspace.summary}</S.ItemBoardName>
                  <S.ProfileImages>
                    <UserImages members={workspace.memberInfo}></UserImages>
                  </S.ProfileImages>
                </S.ItemContents>
              </S.Item>
            </Grid>
          ))}
        </Grid>
      </S.ContentsWrapper>
    </S.Container>
  );
}
