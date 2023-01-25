import Button from '@/components/Button/Button';
import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { SubHeader } from '@/components/SubHeader/SubHeader';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import { Default, Mobile } from '@/utils/mediaQuery';
import { useState } from 'react';
import * as S from './styles';

export default function WorkspaceSetting() {
  const [workspaceName, setWorkspaceName] = useState<string>('PIMFY');
  const [changedWorkspaceName, setChangedWorkspaceName] =
    useState<string>(workspaceName);
  const [workspaceExplain, setWorkspaceExplain] =
    useState<string>('핌피팀입니당');

  function handleWorkspaceName(e: React.ChangeEvent<HTMLInputElement>) {
    setChangedWorkspaceName(e.target.value);
  }
  function handleWorkspaceExplain(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkspaceExplain(e.target.value);
  }
  function handleDelete() {
    
  }

  interface IMember {
    name: string;
    profile: string;
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
  interface IBoard {
    title: string;
  }
  let boards: IBoard[] = [
    {
      title: 'First Board',
    },
    {
      title: 'Second Board',
    },
  ];

  return (
    <S.Container>
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
                defaultValue={workspaceName}
                value={changedWorkspaceName}
                onChange={handleWorkspaceName}
              />
              <S.EmptyBox />
              <SubTitle size="sm">설명</SubTitle>
              <S.RoundLineInput
                defaultValue={workspaceExplain}
                value={workspaceExplain}
                onChange={handleWorkspaceExplain}
              />
              <S.EmptyBox />
              <S.SaveButtonWrapper>
                <Button shadow={true} color="notworking" height="md" width={30}>
                  저장
                </Button>
              </S.SaveButtonWrapper>

              <SubTitle size="md">워크스페이스 삭제</SubTitle>
              <S.EmptyBox />
              <Button
                shadow={true}
                color="primary"
                height="md"
                width={30}
                onClick={handleDelete}
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
