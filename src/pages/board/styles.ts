import styled from '@emotion/styled';

export const Container = styled.div`
  background: #f5f5f5;
`;

export const Wrapper = styled.div`
  display: flex;
  padding-top: 65px;
  height: 100vh;
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

  .itemWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 5px;
    width: 100%;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  background: #f5f5f5;
  padding-right: 25px;
`;
export const MobileListWrapper = styled(ListWrapper)`
  width: 350px;
`;

export const ListHeader = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 15px;

  input {
    border: none;
    font-weight: bold;
    font-size: 18px;
    width: 80%;

    ::placeholder {
      font-size: 15px;
    }
  }
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  vertical-align: middle;
  width: 80%;
`;

export const FormInput = styled.input`
  display: flex;
  align-items: center;
  padding: 0px 25px;
  background: rgba(252, 164, 190, 0.23);
  border-radius: 10px;
  height: 35px;
  width: 100%;
  cursor: pointer;
  border: none;
  outline: none;
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

export const MenuBtn = styled.div`
  position: 'relative';
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: end;
  button {
    color: #fca4be;
    margin-left: 15px;
  }
`;
