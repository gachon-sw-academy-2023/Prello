import { PropsWithChildren } from 'react';
import * as S from './Modal.style';
import { ModalProps } from './Modal.types';
import ModalPortal from './ModalPortal';

function Modal({
  onClickToggleModal,
  size = 'md',
  children,
}: PropsWithChildren<ModalProps>) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    onClickToggleModal?.();
  }
  return (
    <ModalPortal>
      <S.ModalContainer>
        <S.DialogBox size={size}>
          <S.CloseButton onClick={handleClick} size={size}>
            ✖
          </S.CloseButton>
          {children}
        </S.DialogBox>
        <S.Backdrop onClick={handleClick} />
      </S.ModalContainer>
    </ModalPortal>
  );
}

export default Modal;
