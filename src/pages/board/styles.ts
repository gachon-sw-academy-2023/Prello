import styled from '@emotion/styled';
import { ReactSortable } from 'react-sortablejs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f5f5f5;
`;

export const Wrapper = styled.div`
  display: flex;
  padding-top: 65px;
`;

export const MobileRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
`;
export const ListMobileContiner = styled.div`
  display: flex;
  flex-direction: column;
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

export const MobileListWrapper = styled(ListWrapper)`
  width: 350px;
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

export const MobileAddListWrapper = styled(ListWrapper)`
  width: 350px;
  padding: 15px;
`;
