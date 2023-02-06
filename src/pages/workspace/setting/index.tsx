import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import DeleteModal from '@/components/Modals/DeleteModal/DeleteModal';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { Default, Mobile } from '@/utils/mediaQuery';
import React, { useState } from 'react';
import * as S from './styles';
import axios, { AxiosError } from 'axios';

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
  const [workspaceName, setWorkspaceName] = useState<string>('PIMFY');
  const [changedWorkspaceName, setChangedWorkspaceName] =
    useState<string>(workspaceName);
  const [workspaceExplain, setWorkspaceExplain] =
    useState<string>('핌피팀입니당');
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  function handleWorkspaceName(e: React.ChangeEvent<HTMLInputElement>) {
    setChangedWorkspaceName(e.target.value);
  }
  function handleWorkspaceExplain(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkspaceExplain(e.target.value);
  }
  function handleModal() {
    setOpenModal(true);
  }

  const deleteWorkspace = async () => {
    const workspaceId = 5;
    try {
      const response = await axios.post('/workspace/delete', {
        workspaceId,
      });

      if (response.status === 200) {
        // reload
      }
    } catch (error) {
      const err = error as AxiosError;
      // error 처리
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
                // defaultValue={workspaceName}
                value={changedWorkspaceName}
                onChange={handleWorkspaceName}
              />
              <S.EmptyBox />
              <SubTitle size="sm">설명</SubTitle>
              <S.RoundLineInput
                // defaultValue={workspaceExplain}
                value={workspaceExplain}
                onChange={handleWorkspaceExplain}
              />
              <S.EmptyBox />
              <S.SaveButtonWrapper>
                <Button shadow={true} color="notworking" height="md" width={30}>
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
