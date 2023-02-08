import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import ProfileImg from '@/components/ProfileImg/ProfileImg';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import Inform from '@/pages/util';
import { userSelector } from '@/recoil/atom/userSelector';
import { Default, Mobile } from '@/utils/mediaQuery';
import {
  IWorkspace,
  WorkspaceContainerProps,
  WorkspaceUserImageProps,
} from '@/utils/types';
import Grid from '@mui/material/Grid';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CreateWorkspace from '../../../components/Modals/CreateModal/CreateModal';
import WorkSpaceSkeleton from '../skeleton';
import * as S from './styles';

function UserImages({ members }: WorkspaceUserImageProps) {
  const remain = members.length - 2;

  if (members.length > 3)
    return (
      <S.ProfileImages>
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />
        <ProfileImg image="/assets/workspace/sample-profile-image.png" />외{' '}
        {remain} 명
      </S.ProfileImages>
    );

  return (
    <S.ProfileImages>
      {members.map((member: string, index: number) => (
        <ProfileImg
          key={index}
          image="/assets/workspace/sample-profile-image.png"
        />
      ))}
    </S.ProfileImages>
  );
}

function WorkSpaceContainer({ workspaces }: WorkspaceContainerProps) {
  const navigate = useNavigate();

  const handleNavigate = (param: number) => {
    navigate(`/workspace-detail/${param}`);
  };

  return (
    <Grid container spacing={2}>
      {workspaces?.map((workspace: IWorkspace) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={workspace.owner + workspace.name}
        >
          <S.Item onClick={() => handleNavigate(workspace.id)}>
            <S.GradientBG></S.GradientBG>
            <S.ItemContents>
              <S.Title>{workspace.name}</S.Title>
              <S.ItemBoardName>{workspace.summary}</S.ItemBoardName>
              <UserImages members={workspace.memberInfo}></UserImages>
            </S.ItemContents>
          </S.Item>
        </Grid>
      ))}
    </Grid>
  );
}

export default function WorkspaceDefault() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const user = useRecoilValue(userSelector);
  const [cWorkspaces, setCWorkspaces] = useState<IWorkspace[]>();
  const [pWorkspaces, setPWorkspaces] = useState<IWorkspace[]>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const fetchWorkspaces = async () => {
    try {
      setError(false);
      setCWorkspaces([]);
      setPWorkspaces([]);
      setLoading(true);

      const response = await axios.get('/workspace/list', {
        params: {
          email: user.email,
        },
      });

      if (response.status === 200) {
        setCWorkspaces(response.data);
      }

      const response2 = await axios.get('/workspace/list/participate', {
        params: {
          email: user.email,
        },
      });
      if (response2.status === 200) {
        setPWorkspaces(response2.data);
      }
    } catch (error) {
      const err = error as AxiosError;
      setError(true);
    }
    setLoading(false);
  };

  if (loading) return <WorkSpaceSkeleton></WorkSpaceSkeleton>;
  if (error)
    return (
      <Inform message="알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요!"></Inform>
    );
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
        <div hidden={!(cWorkspaces?.length || pWorkspaces?.length)}>
          <S.SubTitle>생성한 워크스페이스</S.SubTitle>
          <WorkSpaceContainer workspaces={cWorkspaces}></WorkSpaceContainer>
          <S.BlankDiv hidden={cWorkspaces?.length != 0}></S.BlankDiv>
          <S.SubTitle>참여한 워크스페이스</S.SubTitle>
          <WorkSpaceContainer workspaces={pWorkspaces}></WorkSpaceContainer>
        </div>
        <S.messageDiv
          hidden={cWorkspaces?.length != 0 || pWorkspaces?.length != 0}
        >
          <div>
            <h1>워크스페이스가 없습니다!</h1>
            <h1>워크스페이스 생성 또는 참여해보세요 ✋</h1>
          </div>
        </S.messageDiv>
      </S.ContentsWrapper>
    </S.Container>
  );
}
