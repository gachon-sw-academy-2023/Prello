import styled from '@emotion/styled';
import { Chip } from '@mui/joy';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  background-color: white;
  position: fixed;
  top: 10%;
  left: 15%;
  width: 70%;
  height: 80%;
  padding: 80px;
`;

export const Title = styled.div`
  height: 20%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const ListName = styled.h1`
  color: #fca4be;
  font-weight: 800;
  font-size: 20px;
`;

export const Divider = styled.div`
  border-left: 1px solid #000000;
  height: 20px;
  margin: 0px 15px;
`;

export const ItemName = styled.span`
  font-size: 30px;
`;

export const Description = styled.div`
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

export const Comment = styled.div`
  width: 70%;
  margin-top: 25px;
`;

export const CommentTitle = styled.h1`
  margin-bottom: 25px;
  font-weight: 600;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyComment = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img`
  content: url('/assets/workspace/sample-profile-image.png');
  width: 7%;
  height: 7%;
  margin-right: 15px;
`;

export const InputComment = styled.textarea`
  width: 90%;
  height: 100px;
  border: 1px solid rgba(45, 57, 76, 0.1);
  resize: none;
  padding: 20px;
  :focus {
    outline: none;
  }
`;

export const MemberComment = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const MemberCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  word-break: keep-all;

  h1 {
    color: #385898;
    font-weight: 600;
  }

  p {
    width: 90%;
    margin-top: 5px;
    word-wrap: break-word;
  }
`;

export const Btn = styled.button`
  border-radius: 2px;
  margin-top: 10px;
  padding: 10px 20px;
`;

export const PostBtn = styled(Btn)`
  background-color: #fca4be;
  width: fit-content;
  margin-left: auto;
  margin-right: 5px;
  color: #ffffff;
`;

export const LoadBtn = styled(Btn)`
  width: 100%;
  background: #f1f2f3;
  margin-top: 25px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  margin-left: 25px;
  width: 30%;
`;

export const MemberChip = styled(Chip)`
  background-color: #fca4be;
  margin-right: 10px;
  font-size: 12px;
`;
