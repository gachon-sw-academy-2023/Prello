import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import {
  Container,
  Line,
  LeftContainer,
  LeftContent,
  LeftContentNotHover,
  Title,
  MembersWrapper,
  Image,
  ProfileName,
  RightContainer,
  InfoContainer,
  WorkspaceImage,
  InfoContents,
  ExplainText,
  BoardContainer,
  Item,
  Icon,
  MemberWrapper,
} from './styles';
import { BarInfo, BarImg, WorkspaceName } from '@/pages/board/styles';
import WorkspaceImg from '@/components/WorkspaceImg/WorkspaceImg';
import SideBar from '@/components/SideBar/SideBar';
import { SubTitle } from '@/components/SubTitle/SubTitle.styles';

export default function WorkspaceDetail() {
  interface IMember {
    name: string;
    profile: string;
  }
  let members: IMember[] = [
    {
      name: 'dahye',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: 'leah',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: 'rylee',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버1',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버2',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버3',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버4',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버5',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버6',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버7',
      profile: 'src/assets/workspace/sample-profile-image.png',
    },
    {
      name: '멤버8',
      profile: 'src/assets/workspace/sample-profile-image.png',
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
    <Container>
      <SideBar memberInfo={members} />
      <RightContainer>
        <InfoContainer>
          <WorkspaceImg
            radius="0px"
            image="src/assets/authorization/pimfy_profile.png"
          />
          <InfoContents>
            <SubTitle size="md">PIMPY</SubTitle>
            <ExplainText>핌피팀입니당</ExplainText>
          </InfoContents>
        </InfoContainer>
        <Line margin="0"></Line>
        <BoardContainer>
          <Grid container spacing={4}>
            {boards.map((board) => (
              <Grid item xs={4}>
                <Item center={false} color={'#ffe7ee'}>
                  <Title margin={'30px 20px'}>{board.title}</Title>
                </Item>
              </Grid>
            ))}
            <Grid item xs={4}>
              <Item center={true} color={'#fffcff'}>
                <Image
                  width={'50px'}
                  height={'50px'}
                  img={'src/assets/workspace/sample-add-icon.png'}
                ></Image>
              </Item>
            </Grid>
          </Grid>
        </BoardContainer>
      </RightContainer>
    </Container>
  );
}
