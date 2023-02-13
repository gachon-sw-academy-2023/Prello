import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { WithSearchBar } from '@/components/SubHeader/SubHeader.stories';
import Inform from '@/pages/util';
import { Default, Mobile } from '@/utils/mediaQuery';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sortable from 'sortablejs';
import Card from './Card/Card';
import * as S from './styles';

interface ICard {
  id: number;
  title: string;
  order: number;
}

interface IBoard {
  id: number;
  name: string;
  workspaceId: number;
}

export default function Board() {
  const [lists, setLists] = useState<ICard[]>([]);
  const [member, setMember] = useState([]);
  const { boardId } = useParams() as { boardId: string };
  const [board, setBoard] = useState<IBoard>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get('/members/list')
      .then((res) => setMember(res.data))
      .catch((error) => alert(error));
    UpdateList();
  }, []);

  useEffect(() => {
    fetchBoardList();
  }, []);

  const fetchBoardList = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/board', {
        params: {
          id: boardId,
        },
      });
      if (response.status === 200) {
        setBoard(response.data);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column: any) => {
      new Sortable(column, {
        animation: 150,
        ghostClass: 'blue-background-class',
        onUpdate({ oldIndex, newIndex }) {
          axios
            .post('/card/update-index', { oldIndex, newIndex })
            .catch((error) => alert(error));
        },
      });
    });
  });

  const UpdateList = () => {
    axios
      .get('/card')
      .then((res) => setLists(res.data))
      .catch((error) => alert(error));
  };

  const handleAddList = () => {
    axios
      .post('/card/create', {
        title: '',
        order: lists.length,
      })
      .then((res) => setLists(res.data))
      .catch((error) => alert(error));
  };

  if (loading) return <div>로딩중...</div>;
  if (error)
    return (
      <Inform message="알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요!"></Inform>
    );

  return (
    <S.Container>
      <Default>
        <WithSearchBar
          divider={true}
          children={board?.name}
          profileImg="public/assets/authorization/pimfy_profile.png"
          searchBar={true}
        />
      </Default>
      <Mobile>
        <MobileHeader
          children={board?.name}
          profileImg="public/assets/authorization/pimfy_profile.png"
        />
      </Mobile>
      <S.Wrapper>
        <Default>
          <SideBar />
        </Default>

        <Default>
          <S.RightWrapper>
            <S.ListContainer className="column">
              {lists
                .sort((a, b) => a.order - b.order)
                .map((list: ICard) => (
                  <Card
                    title={list.title}
                    key={list.id}
                    cardId={list.id}
                    UpdateList={UpdateList}
                  />
                ))}
            </S.ListContainer>
            <S.AddListWrapper onClick={handleAddList}>
              <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
            </S.AddListWrapper>
          </S.RightWrapper>
        </Default>

        <Mobile>
          <S.MobileRightWrapper>
            <S.ListMobileContiner className="column">
              {lists.map((list: ICard) => (
                <Card
                  title={list.title}
                  key={list.id}
                  cardId={list.id}
                  UpdateList={UpdateList}
                />
              ))}
            </S.ListMobileContiner>
            <S.MobileAddListWrapper onClick={handleAddList}>
              <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
            </S.MobileAddListWrapper>
          </S.MobileRightWrapper>
        </Mobile>
      </S.Wrapper>
    </S.Container>
  );
}
