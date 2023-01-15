import * as S from './Footer.styles';
import facebook from '@/assets/images/main/facebook.png';
import github from '@/assets/images/main/github.png';
import instagram from '@/assets/images/main/instagram.png';
import linkedIn from '@/assets/images/main/linkedIn.png';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.ColWrapper ratio={70}>
        <S.RowWrapper ratio={70}>
          <h1>Prello</h1>
        </S.RowWrapper>
        <S.TextWrapper ratio={15}>
          <h2>Address</h2>
          <p>경기도 성남시 수정구 성남대로 1342</p>
          <p>가천대학교 AI 공학관 411호</p>
        </S.TextWrapper>
        <S.TextWrapper ratio={15}>
          <h2>Contact</h2>
          <p>pimfy@example.com</p>
          <p>(270) 555-0117</p>
        </S.TextWrapper>
      </S.ColWrapper>
      <S.ColWrapper ratio={30}>
        <S.CopyrightWrapper ratio={70}>
          <span>
            {' '}
            {'Copyright © '}
            PIMFY {new Date().getFullYear()}
            {'.'}
          </span>
          <span>이용약관</span>
          <span> 개인정보 처리방침</span>
        </S.CopyrightWrapper>
        <S.ImageWrapper ratio={15}>
          <S.FooterImage img={facebook}></S.FooterImage>
          <S.FooterImage img={github}></S.FooterImage>
          <S.FooterImage img={instagram}></S.FooterImage>
          <S.FooterImage img={linkedIn}></S.FooterImage>
        </S.ImageWrapper>
      </S.ColWrapper>
    </S.FooterContainer>
  );
}
