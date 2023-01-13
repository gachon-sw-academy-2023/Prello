import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Title,
  CreateButton,
  Item,
  GradientBG,
  ItemContents,
  ItemBoardName,
  ProfileImages,
  ProfileImage,
} from './styles';

export default function WorkspaceDefault() {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Title>나의 워크스페이스</Title>
        <CreateButton>+ 새로운 워크스페이스</CreateButton>
      </Wrapper>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item
            onClick={() => {
              navigate('/workspace-detail');
            }}
          >
            <GradientBG></GradientBG>
            <ItemContents>
              <Title>MOKA</Title>
              <ItemBoardName>First Board</ItemBoardName>
              <ProfileImages>
                <ProfileImage></ProfileImage>
                <ProfileImage></ProfileImage>
                <ProfileImage></ProfileImage>
              </ProfileImages>
            </ItemContents>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item></Item>
        </Grid>
        <Grid item xs={3}>
          <Item></Item>
        </Grid>
        <Grid item xs={3}>
          <Item></Item>
        </Grid>
      </Grid>
    </Container>
  );
}
