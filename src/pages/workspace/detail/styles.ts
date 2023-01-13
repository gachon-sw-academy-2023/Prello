import styled from '@emotion/styled';
type ImageProps = {
  img: string;
  width: string;
  height: string;
};
type ItemProps = {
  center: boolean;
  color: string;
};
type TitleProps = {
  margin: string;
};
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f6f7;
  display: flex;
`;

// 구분선
const Line = styled.div<TitleProps>`
  width: 100%;
  height: 0.5px;
  margin-left: ${(props) => props.margin};
  background-color: #71717190;
`;

// 왼쪽 바 div
const LeftContainer = styled.div`
  width: 20%;
  min-height: 100vh;
  padding: 20px 30px;
`;
const LeftContent = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0px;
  padding-left: 10px;
  border-radius: 0.5rem;
  &:hover {
    background-color: #d7d7d7;
  }
`;

const LeftContentNotHover = styled(LeftContent)`
  pointer-events: none;
`;
const Title = styled.h1<TitleProps>`
  font-size: 20px;
  font-weight: 600;
  font-family: 'LINESeedKR-Bd';
  margin: ${(props) => props.margin};
  color: #4f4e4e;
`;
const MembersWrapper = styled.div`
  width: 100%;
  height: 60vh;
  overflow: auto;
  padding-left: 10px;
`;
const MemberWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 10px;
`;

// 이미지
const Image = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-size: cover;
  background-image: url(${(props) => props.img});
`;
const ProfileName = styled.p`
  font-size: 15px;
  font-family: 'LINESeedKR-Rg';
  padding: 13px 10px 7px 10px;
  color: #4f4e4e;
`;

//오른쪽 화면
const RightContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  padding: 30px 50px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
`;

const WorkspaceImage = styled.div`
  width: 90px;
  height: 80px;
  background-size: cover;
  background-image: url('src/assets/workspace/sample-workspace-image.png');
`;

const InfoContents = styled.div`
  width: 100%;
  padding-left: 15px;
`;
const ExplainText = styled.p`
  font-size: 16px;
  font-family: 'LINESeedKR-Rg';
  margin: 20px 10px 7px 0;
  color: #4f4e4e;
`;

// 보드 아이템
const BoardContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;
const Item = styled.div<ItemProps>`
  display: flex;
  align-items: ${(props) => (props.center ? 'center' : 'left')};
  flex-direction: row;
  justify-content: ${(props) => (props.center ? 'center' : 'left')};
  background-color: ${(props) => props.color};
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  margin: 10px 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;
const Icon = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-size: cover;
  background-image: url(${(props) => props.img});
  margin: 7px 10px 10px 0;
`;

export {
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
};
