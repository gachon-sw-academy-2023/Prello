import styled from '@emotion/styled';
import { ReactSortable } from 'react-sortablejs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  margin-top: 65px;
`;

export const RightWrapper = styled.div`
  display: flex;
  background: #f5f5f5;
  padding-right: 25px;
`;

export const ListContainer = styled.div`
  display: flex;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #606060;

  width: 250px;
  height: fit-content;
  padding: 40px 0px 20px 0px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  margin-left: 25px;
  margin-top: 30px;
  justify-content: center;
  cursor: pointer;
`;

export const ListHeader = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 15px;

  h1 {
    font-weight: bold;
  }

  span {
    font-size: 10px;
  }
`;
export const ItemWrapper = styled(ReactSortable)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 5px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 25px;
  background: rgba(252, 164, 190, 0.23);
  border-radius: 10px;
  height: 35px;
  margin-bottom: 10px;
  width: 80%;
  cursor: pointer;
`;

export const AddBtn = styled.div`
  display: flex;
  width: 80%;
  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
`;

export const AddBtnText = styled.span`
  margin-left: 10px;
`;

export const AddListBtn = styled.div`
  font-weight: 600;
  font-size: 15px;
`;

export const AddListWrapper = styled(ListWrapper)`
  padding: 15px 40px;
`;
