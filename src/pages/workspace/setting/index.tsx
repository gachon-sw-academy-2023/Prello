import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import DeleteModal from '@/components/Modals/DeleteModal/DeleteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import Inform from '@/pages/util';
import ROUTES from '@/routes';
import { Default, Mobile } from '@/utils/mediaQuery';
import { IWorkspace } from '@/utils/types';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';

interface IMember {
  name: string;
  profile: string;
}

interface IBoard {
  title: string;
}

let members: IMember[] = [
  {
    name: 'dahye',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: 'leah',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: 'rylee',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버1',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버2',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버3',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버4',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버5',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버6',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버7',
    profile: '/assets/workspace/sample-profile-image.png',
  },
  {
    name: '멤버8',
    profile: '/assets/workspace/sample-profile-image.png',
  },
];

let boards: IBoard[] = [
  {
    title: 'First Board',
  },
  {
    title: 'Second Board',
  },
];

export default function WorkspaceSetting() {
  const { workspaceId } = useParams() as { workspaceId: string };
  const [workspace, setWorkspace] = useState<IWorkspace>();
  const [workspaceName, setWorkspaceName] = useState<string>('');
  const [changedWorkspaceName, setChangedWorkspaceName] =
    useState<string>(workspaceName);
  const [workspaceSummary, setWorkspaceSummary] = useState<string>('');
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);

  const naviate = useNavigate();

  function handleWorkspaceName(e: React.ChangeEvent<HTMLInputElement>) {
    setChangedWorkspaceName(e.target.value);
  }
  function handleWorkspaceExplain(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkspaceSummary(e.target.value);
  }
  function handleModal() {
    setOpenModal(true);
  }

  useEffect(() => {
    fetchWorkspace();
  }, []);

  const fetchWorkspace = async () => {
    try {
      setError(false);
      setLoading(true);

      const response = await axios.get('/workspace', {
        params: {
          id: workspaceId,
        },
      });

      if (response.status === 200) {
        setWorkspace(response.data);
        setWorkspaceName(response.data.name);
        setChangedWorkspaceName(response.data.name);
        setWorkspaceSummary(response.data.summary);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  if (loading) return <div>로딩중...</div>;
  if (error)
    return (
      <Inform message="알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요!"></Inform>
    );

  const updateWorkspace = async () => {
    const data = {
      id: parseInt(workspaceId),
      summary: workspaceSummary,
      name: changedWorkspaceName,
    };

    try {
      const response = await axios.post('/workspace/update', data);

      if (response.status === 200) {
        fetchWorkspace();
        alert('워크스페이스 정보가 업데이트 되었습니다!');
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  };

  const deleteWorkspace = async () => {
    const data = {
      workspaceId: parseInt(workspaceId),
    };
    try {
      const response = await axios.post('/workspace/delete', data);
      if (response.status === 200) {
        alert('워크스페이스가 삭제되었습니다!');
        naviate(ROUTES.WORKSPACEDEFAULT);
      }
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
    }
  };

  return (
    <S.Container>
      {isOpenModal && (
        <DeleteModal
          workspaceName={workspaceName}
          setOpenModal={setOpenModal}
          deleteWorkspace={deleteWorkspace}
        />
      )}
      <Default>
        <SubHeader
          divider={true}
          children="Workspace"
          profileImg="assets/authorization/pimfy_profile.png"
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="public/assets/authorization/pimfy_profile.png" />
      </Mobile>
      <S.Wrapper>
        <SideBar memberInfo={members} />
        <S.RightContainer>
          <S.InfoContainer>
            <S.InfoContents>
              <SubTitle size="md">워크스페이스 정보</SubTitle>
              <S.EmptyBox />
              <WorkspaceImg
                radius="none"
                image="/assets/authorization/pimfy_profile.png"
              />
              <S.EmptyBox />
              <SubTitle size="sm">이름</SubTitle>
              <S.RoundLineInput
                // defaultValue={changedWorkspaceName}
                value={changedWorkspaceName}
                onChange={handleWorkspaceName}
              />
              <S.EmptyBox />
              <SubTitle size="sm">설명</SubTitle>
              <S.RoundLineInput
                // defaultValue={workspaceSummary}
                value={workspaceSummary}
                onChange={handleWorkspaceExplain}
              />
              <S.EmptyBox />
              <S.SaveButtonWrapper>
                <Button
                  shadow={true}
                  color="primary"
                  height="md"
                  width={30}
                  disable={
                    !(
                      workspace?.name !== changedWorkspaceName ||
                      workspace?.summary !== workspaceSummary
                    )
                  }
                  onClick={updateWorkspace}
                >
                  변경 사항 저장
                </Button>
              </S.SaveButtonWrapper>

              <SubTitle size="md">워크스페이스 삭제</SubTitle>
              <S.EmptyBox />
              <Button
                shadow={true}
                color="primary"
                height="md"
                width={30}
                onClick={handleModal}
              >
                {workspaceName} 워크스페이스 삭제
              </Button>
            </S.InfoContents>
          </S.InfoContainer>
        </S.RightContainer>
      </S.Wrapper>
    </S.Container>
  );
}
