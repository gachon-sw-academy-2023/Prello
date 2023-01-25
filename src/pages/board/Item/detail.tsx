import React from 'react';
import * as S from './styles';
export default function Detail() {
  return (
    <S.Background
      onClick={(e: React.MouseEvent<HTMLElement>) =>
        (e.target.style.display = 'none')
      }
    >
      <S.Modal>
        <S.Title></S.Title>
        <S.Wrapper>
          <S.Comment></S.Comment>
          <S.Info></S.Info>
        </S.Wrapper>
      </S.Modal>
    </S.Background>
  );
}
