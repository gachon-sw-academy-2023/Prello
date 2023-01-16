import { PropsWithChildren } from 'react';
import * as S from './modalStyles';

interface IModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<IModalDefaultType>) {
  setTimeout(() => {
    if (onClickToggleModal) {
      onClickToggleModal();
    }
  }, 2000);
  return (
    <S.ModalContainer>
      <S.DialogBox>{children}</S.DialogBox>
    </S.ModalContainer>
  );
}

export default Modal;
