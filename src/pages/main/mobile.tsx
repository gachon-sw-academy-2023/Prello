import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { throttle } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import * as S from './styles';
import introduce1 from '/assets/images/main/introduce1-temp.png';
import introduce2 from '/assets/images/main/introduce2-temp.png';
import introduce3 from '/assets/images/main/introduce3-temp.png';
import introduce4 from '/assets/images/main/introduce4-temp.png';
import { useRecoilState } from 'recoil';
import { userSelector } from '@/recoil/atom/userSelector';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@/routes';

export default function MobileMain() {
  const [user, setUser] = useRecoilState(userSelector);
  const [updateHeader, setUpdateHeader] = useState<Boolean>();
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        if (ref.current != null) {
          if (currentScrollY < ref.current.offsetTop - 50) {
            setUpdateHeader(false);
          } else {
            setUpdateHeader(true);
          }
        }
      }, 300),
    [updateHeader],
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]);

  return (
    <S.Container>
      <Header
        user={user}
        onLogin={() => {
          navigate(ROUTES.LOGIN);
        }}
        onLogout={() => {
          setUser({
            id: 0,
            email: '',
            password: '',
            nickname: '',
          });
        }}
        onCreateAccount={() => {
          navigate(ROUTES.SIGNUP);
        }}
        color={updateHeader ? 'primary' : 'white'}
        backgroundColor={updateHeader ? 'white' : 'empty'}
      ></Header>
      <S.Wrapper>
        <S.Content>
          <S.MTitleImage></S.MTitleImage>
          <S.MMainImage></S.MMainImage>
          {user.nickname !== '' ? (
            <S.SubmitBtn
              height="lg"
              width={100}
              color="white"
              textColor="black"
              radius="circle"
              onClick={() => {
                navigate(ROUTES.WORKSPACEDEFAULT);
              }}
            >
              바로 시작하기
            </S.SubmitBtn>
          ) : (
            <S.SubmitBtn
              height="lg"
              width={100}
              color="white"
              textColor="black"
              radius="circle"
              onClick={() => {
                navigate(ROUTES.SIGNUP);
              }}
            >
              회원가입
            </S.SubmitBtn>
          )}
        </S.Content>
      </S.Wrapper>
      <S.MIntroduceWrapper ref={ref}>
        <S.MWrapper>
          <h1>워크스페이스</h1>
          <h3>prello는 팀별로 워크스페이스를 구성할 수 있습니다.</h3>
          <h3>자유롭게 팀원을 추가하고 일정관리를 시도해보세요. 😀</h3>
        </S.MWrapper>
        <S.MWrapper>
          <Slide direction="right" duration={1000} triggerOnce>
            <S.MIntroduceImage img={introduce1}></S.MIntroduceImage>
          </Slide>
        </S.MWrapper>
      </S.MIntroduceWrapper>
      <S.MIntroduceWrapper>
        <S.MWrapper>
          <h1>보드</h1>
          <h3>워크스페이스에 프로젝트별 보드를 생성할 수 있습니다.</h3>
          <h3>보드를 생성하여 멋진 프로젝트 완성을 위해 노력해보아요 ✨</h3>
        </S.MWrapper>
        <S.MWrapper>
          <Slide direction="left" duration={1000} triggerOnce>
            <S.MIntroduceImage img={introduce2}></S.MIntroduceImage>
          </Slide>
        </S.MWrapper>
      </S.MIntroduceWrapper>
      <S.MIntroduceWrapper>
        <S.MWrapper>
          <h1>리스트와 아이템</h1>
          <h3>보드에 시각적인 관리가 쉽도록 리스트를 생성하고,</h3>
          <h3>아이템을 추가해보실래요? 🤔</h3>
        </S.MWrapper>
        <S.MWrapper>
          <Slide direction="right" duration={1000} triggerOnce>
            <S.MIntroduceImage img={introduce3}></S.MIntroduceImage>
          </Slide>
        </S.MWrapper>
      </S.MIntroduceWrapper>
      <S.MIntroduceWrapper>
        <S.MWrapper>
          <h1>접근성</h1>
          <h3>접속하는 환경에 따라 기기에 적합하도록 구성해줍니다.</h3>
          <h3>자유롭게 어디서나 간편하게 접속할 수 있습니다 ✋</h3>
        </S.MWrapper>
        <S.MWrapper>
          <Slide direction="right" duration={1000} triggerOnce>
            <S.MIntroduceImage img={introduce4}></S.MIntroduceImage>
          </Slide>
        </S.MWrapper>
      </S.MIntroduceWrapper>
      <Footer isMobile={true}></Footer>
    </S.Container>
  );
}
