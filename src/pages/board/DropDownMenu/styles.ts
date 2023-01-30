import styled from '@emotion/styled';
export const Container = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 15px;

  width: 150px;
  li {
    padding: 20px 10px;
    border-radius: 10px;

    :hover {
      background-color: pink;
    }
  }
`;
