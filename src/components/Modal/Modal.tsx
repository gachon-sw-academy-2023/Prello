import { PropsWithChildren } from 'react';
import * as S from './Modal.style';
import { ModalProps } from './Modal.types';

function Modal({
  onClickToggleModal,
  size = 'md',
  children,
}: PropsWithChildren<ModalProps>) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();

    if (onClickToggleModal) {
      onClickToggleModal();
    }
  }
  return (
    <S.ModalContainer>
      <S.DialogBox size={size}>
        <S.CloseButton onClick={handleClick} size={size}>
          ✖
        </S.CloseButton>
        {children}
      </S.DialogBox>
      <S.Backdrop onClick={handleClick} />
    </S.ModalContainer>
  );
}

export default Modal;
