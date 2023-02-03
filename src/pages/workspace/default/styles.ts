import styled from '@emotion/styled';
// 전체 div
export const Container = styled.div`
  width: 100%;
  background-color: #f5f6f7;
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f6f7;
  padding: 65px 50px 0 50px;
`;

// 타이틀 + 버튼 감싸는 div
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  font-family: 'LINESeedKR-Bd';
  color: #4f4e4e;
`;
export const CreateButton = styled.button`
  font-family: 'LINESeedKR-Rg';
  background-color: #fca4be;
  color: white;
  padding: 0.6rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;

// 워크스페이스 아이템
export const Item = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  margin: 10px 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;
// 아이템 왼쪽 그라데이션
export const GradientBG = styled.div`
  width: 60px;
  height: 200px;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background: linear-gradient(to bottom, #fca4be 0%, #e5a4fc 100%);
`;
export const ItemContents = styled.div`
  width: 240px;
  height: 200px;
  padding: 30px 10px;
`;
export const ItemBoardName = styled.h1`
  padding: 20px 0 50px 0;
  font-size: 18px;
  font-weight: 500;
  font-family: 'LINESeedKR-Rg';
  color: #4f4e4e;
`;
export const ProfileImages = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
`;
export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-size: cover;
  background-image: url('/assets/workspace/sample-profile-image.png');
`;
