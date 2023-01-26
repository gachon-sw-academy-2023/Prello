import styled from '@emotion/styled';
import { Chip, Textarea } from '@mui/joy';

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
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
`;

export const Comment = styled.div`
  width: 70%;
`;

export const CommentTitle = styled.h1`
  margin-bottom: 25px;
  font-weight: 600;
`;

export const InputComment = styled(Textarea)`
  border: 2px solid #fca4be;
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
