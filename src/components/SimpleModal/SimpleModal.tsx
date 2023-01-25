import { PropsWithChildren } from 'react';
import * as S from './SimpleModal.style';
import { SimpleModalProps } from './SimpleModal.types';

function SimpleModal({
  onClickToggleModal,
  size = 'md',
  children,
}: PropsWithChildren<SimpleModalProps>) {
  setTimeout(() => {
    if (onClickToggleModal) {
      onClickToggleModal();
    }
  }, 2000);
  return (
    <S.ModalContainer>
      <S.DialogBox size={size}>{children}</S.DialogBox>
    </S.ModalContainer>
  );
}

export default SimpleModal;
