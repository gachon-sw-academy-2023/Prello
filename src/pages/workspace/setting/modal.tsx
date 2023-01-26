import React, { PropsWithChildren } from 'react';
import * as S from './modal.styles';
interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();

    if (onClickToggleModal) {
      onClickToggleModal();
    }
  }
  return (
    <S.ModalContainer>
      <S.DialogBox>
        <S.CloseButton onClick={handleClick}>✖</S.CloseButton>
        {children}
      </S.DialogBox>
      <S.Backdrop onClick={handleClick} />
    </S.ModalContainer>
  );
}
export default Modal;
