import Modal from '@/components/Modal/Modal';
import * as S from './DeleteModal.styles';
import SubTitle from '@/components/SubTitle/SubTitle';
import { DeleteWorkspaceProps } from '@/utils/types';

export default function DeleteModal({
  workspaceName,
  setOpenModal,
  deleteWorkspace,
}: DeleteWorkspaceProps) {
  const handleModal = () => {
    setOpenModal(false);
    deleteWorkspace();
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
      <S.RoundInput></S.RoundInput>
      <S.EmptyBox />
      <S.DeleteButton
        shadow={true}
        color="primary"
        height="md"
        width={0}
        onClick={handleModal}
      >
        삭제하기
      </S.DeleteButton>
    </Modal>
  );
}
