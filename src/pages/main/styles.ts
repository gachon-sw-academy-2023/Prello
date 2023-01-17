import styled from '@emotion/styled';
import Button from '@/components/Button/Button';

type IntroduceImageProps = {
  img: string;
};

/* 메인 페이지 */
export const Container = styled.div`
  overflow: 'scroll';
`;

export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #fca4be 0%, #e5a4fc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TitleImage = styled.img`
  width: 20%;
  content: url('/assets/images/main/logo.png');
`;

export const MainImage = styled.img`
  width: 60%;
  margin-bottom: 20px;
  content: url('/assets/images/main/main.png');
`;

/* 소개 페이지 */
export const IntroduceWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const InsideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  max-width: 100%;
  flex-direction: column;

  h1 {
    width: 80%;
    font-size: xx-large;
    font-weight: 800;
    margin-bottom: 45px;
    text-align: left;
    margin-top: -10px;
    font-family: 'LINESeedKR-Bd';
  }

  h3 {
    width: 80%;
    font-size: large;
    font-weight: 500;
    margin-bottom: 25px;
    margin-top: -10px;
    text-align: left;
    font-family: 'LINESeedKR-Rg';
  }
`;

export const LeftSmallWrapper = styled(InsideWrapper)`
  width: 40%;
  float: left;
`;

export const RightLargeWrapper = styled(InsideWrapper)`
  width: 60%;
  float: right;
`;

export const LeftLargeWrapper = styled(InsideWrapper)`
  width: 60%;
  float: left;
`;

export const RightSmallWrapper = styled(InsideWrapper)`
  width: 40%;
  float: right;
`;

export const IntroduceImage = styled.img<IntroduceImageProps>`
  width: 90%;
  content: url(${(props) => props.img});
`;

export const SubmitBtn = styled(Button)`
  margin-top: 5px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
`;
