import * as S from './styles';
import introduce1 from '@/assets/images/main/introduce1-temp.png';
import introduce2 from '@/assets/images/main/introduce2-temp.png';
import introduce3 from '@/assets/images/main/introduce3-temp.png';
import introduce4 from '@/assets/images/main/introduce4-temp.png';
import { Slide } from 'react-awesome-reveal';
import { Header } from '@/components/Header/Header';
import { useEffect, useState, useMemo, useRef } from 'react';
import { throttle } from 'lodash';

type User = {
  name: string;
};

export default function Main() {
  const [user, setUser] = useState<User>();
  const [updateHeader, setUpdateHeader] = useState<Boolean>();
  const ref = useRef<any>(0);

  const handleLogin = () => {
    /* TODO: LOGIN */
    setUser({ name: 'PIMFY' });
  };

  const handleLogout = () => {
    /* TODO: LOGOUT */
    setUser(undefined);
  };

  const handleJoin = () => {
    /* TODO: JOIN */
    setUser({ name: 'PIMFY' });
  };

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < ref.current.offsetTop - 50) {
          setUpdateHeader(false);
        } else {
          setUpdateHeader(true);
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
        onLogin={() => handleLogin()}
        onLogout={() => handleLogout()}
        onCreateAccount={() => handleJoin()}
        color={updateHeader ? 'primary' : 'white'}
        backgroundColor={updateHeader ? 'white' : 'empty'}
      ></Header>
      <S.Wrapper>
        <S.Content>
          <S.TitleImage></S.TitleImage>
          <S.MainImage></S.MainImage>
        </S.Content>
      </S.Wrapper>
      <S.IntroduceWrapper ref={ref}>
        <S.LeftSmallWrapper>
          <h1>워크스페이스</h1>
          <h3>prello는 팀별로 워크스페이스를 구성할 수 있습니다.</h3>
          <h3>자유롭게 팀원을 추가하고 일정관리를 시도해보세요. 😀</h3>
        </S.LeftSmallWrapper>
        <S.RightLargeWrapper>
          <Slide direction="right" duration={1000} triggerOnce>
            <S.IntroduceImage img={introduce1}></S.IntroduceImage>
          </Slide>
        </S.RightLargeWrapper>
      </S.IntroduceWrapper>
      <S.IntroduceWrapper>
        <S.LeftLargeWrapper>
          <Slide direction="left" duration={1000} triggerOnce>
            <S.IntroduceImage img={introduce2}></S.IntroduceImage>
          </Slide>
        </S.LeftLargeWrapper>
        <S.RightSmallWrapper>
          <h1>보드</h1>
          <h3>워크스페이스에 프로젝트별 보드를 생성할 수 있습니다.</h3>
          <h3>보드를 생성하여 멋진 프로젝트 완성을 위해 노력해보아요 ✨</h3>
        </S.RightSmallWrapper>
      </S.IntroduceWrapper>
      <S.IntroduceWrapper>
        <S.LeftSmallWrapper>
          <h1>리스트와 아이템</h1>
          <h3>보드에 시각적인 관리가 쉽도록 리스트를 생성하고,</h3>
          <h3>아이템을 추가해보실래요? 🤔</h3>
        </S.LeftSmallWrapper>
        <S.RightLargeWrapper>
          <Slide direction="right" duration={1000} triggerOnce>
            <S.IntroduceImage img={introduce3}></S.IntroduceImage>
          </Slide>
        </S.RightLargeWrapper>
      </S.IntroduceWrapper>
      <S.IntroduceWrapper>
        <S.LeftLargeWrapper>
          <Slide direction="left" duration={1000} triggerOnce>
            <S.IntroduceImage img={introduce4}></S.IntroduceImage>
          </Slide>
        </S.LeftLargeWrapper>
        <S.RightSmallWrapper>
          <h1>접근성</h1>
          <h3>접속하는 환경에 따라 기기에 적합하도록 구성해줍니다.</h3>
          <h3>자유롭게 어디서나 간편하게 접속할 수 있습니다 ✋</h3>
        </S.RightSmallWrapper>
      </S.IntroduceWrapper>
    </S.Container>
  );
}
