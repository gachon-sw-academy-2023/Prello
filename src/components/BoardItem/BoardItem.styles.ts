import Button from '@/components/Button/Button';
import styled from '@emotion/styled';
type ItemProps = {
  center: boolean;
  color: string;
};

// 보드 아이템
export const BoardContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;
export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  background-color: #ffe7ee;
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  margin: 10px 0;
  padding: 20px 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
export const TitleInput = styled.input`
  width: 92%;
  height: fit-content;
  font-size: 20px;
  font-weight: 600;
  font-family: 'LINESeedKR-Bd';
  color: #4f4e4e;
  background-color: #ffe7ee;
  border: none;
  ::placeholder {
    color: #bdbdbd;
  }
`;
export const MenuBtn = styled.div`
  position: 'relative';
`;
export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const IconBtn = styled.div`
  padding: 10px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 90px;
`;
export const SaveBtn = styled(Button)`
  width: 60px;
`;
