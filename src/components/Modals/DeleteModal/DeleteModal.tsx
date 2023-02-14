import Modal from '@/components/Modal/Modal';
import SubTitle from '@/components/SubTitle/SubTitle';
import { DeleteWorkspaceProps } from '@/utils/types';
import { useState } from 'react';
import * as S from './DeleteModal.styles';

export default function DeleteModal({
  workspaceName,
  setOpenModal,
  deleteWorkspace,
}: DeleteWorkspaceProps) {
  const [inputValue, setInputValue] = useState<string>('');

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const handleModal = () => {
    setOpenModal(false);
  };

  const handleDelete = () => {
    deleteWorkspace();
    handleModal();
  };

  return (
    <Modal onClickToggleModal={handleModal}>
      <SubTitle size="md">워크스페이스 삭제</SubTitle>
      <S.ExplainText>
        워크스페이스 삭제시 보드, 아이템들이 모두 함께 삭제되며 복구가
        불가능합니다.
      </S.ExplainText>
      <S.ExplainText>
        워크페이스 삭제를 원하시면 {workspaceName}을(를) 아래에 입력해주세요.
      </S.ExplainText>
      <S.RoundInput
        value={inputValue}
        onChange={handleInputValue}
        data-testid="delete-workspace-name"
      ></S.RoundInput>
      <S.EmptyBox />
      <S.DeleteButton
        shadow={true}
        color="primary"
        height="md"
        width={0}
        onClick={handleDelete}
        disable={inputValue !== workspaceName}
      >
        삭제하기
      </S.DeleteButton>
    </Modal>
  );
}
