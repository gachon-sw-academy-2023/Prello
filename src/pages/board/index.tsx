import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { WithSearchBar } from '@/components/SubHeader/SubHeader.stories';
import { workspaceSelector } from '@/recoil/atom/workspaceSelector';
import request from '@/utils/api';
import { Default, Mobile } from '@/utils/mediaQuery';
import { Skeleton } from '@mui/material';
import { height } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Sortable from 'sortablejs';
import Inform from '../util';
import Card from './Card/Card';
import { CardSkeleton } from './Card/skeleton';
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
  const workspace = useRecoilValue(workspaceSelector);
  const [lists, setLists] = useState<ICard[]>([]);
  const { boardId } = useParams();
  const [board, setBoard] = useState<IBoard>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [size, setSize] = useState<boolean>();
  useEffect(() => {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column: any) => {
      new Sortable(column, {
        animation: 150,
        ghostClass: 'blue-background-class',
        onUpdate({ oldIndex, newIndex }) {
          axios.put('/api/v1/cards/index', { oldIndex, newIndex });
        },
      });
    });
  });
  useEffect(() => {
    UpdateList();
    fetchBoardList();
  }, []);

  useEffect(() => {
    setLists(lists);
  }, [lists]);

  useEffect(() => {
    window.addEventListener('resize', resize);
  });
  useEffect(() => {
    UpdateList();
  }, [size]);

  const resize = () => {
    if (window.innerWidth < 765) {
      setSize(true);
    } else {
      setSize(false);
    }
  };

  const fetchBoardList = async () => {
    await request
      .get(`/api/v1/boards/${boardId}`)
      .then((res) => setBoard(res.data));
  };

  const fetchList = (list: ICard[]) => {
    setLoading(true);
    setLists(list);
  };

  const UpdateList = async () => {
    await request.get('/api/v1/cards', { params: { boardId } }).then((res) => {
      setLists(res.data);
    });
    // await axios
    //   .get('/card', {
    //     params: {
    //       boardId,
    //     },
    //   })
    //   .then((res) => setLists(res.data))
    //   .catch((error) => alert(error));
  };

  const handleAddList = async () => {
    await request
      .post('/api/v1/cards', {
        title: '',
        order: lists.length,
        boardId: boardId,
      })
      .then((res) => setLists(res.data));
    // axios
    //   .post('/card/create', {
    //     title: '',
    //     order: lists.length,
    //     boardId: boardId,
    //   })
    //   .then((res) => setLists(res.data))
    //   .catch((error) => alert(error));
  };

  if (error)
    return (
      <Inform message="알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요!"></Inform>
    );

  return (
    <S.Container>
      <Default>
        {loading ? (
          <WithSearchBar
            divider={true}
            children="보드이름"
            profileImg="public/assets/authorization/pimfy_profile.png"
            searchBar={true}
            isLoading={true}
          />
        ) : (
          <WithSearchBar
            divider={true}
            children={board?.name}
            profileImg="public/assets/authorization/pimfy_profile.png"
            searchBar={true}
          />
        )}
      </Default>
      <Mobile>
        {loading ? (
          <MobileHeader
            children={board?.name}
            profileImg="public/assets/authorization/pimfy_profile.png"
          />
        ) : (
          <MobileHeader
            children={board?.name}
            profileImg="public/assets/authorization/pimfy_profile.png"
          />
        )}
      </Mobile>
      <S.Wrapper>
        <Default>
          <SideBar
            workspaceName={workspace.name}
            memberInfo={workspace.memberInfo}
          />
        </Default>

        <Default>
          {loading ? (
            <S.RightWrapper>
              <S.ListContainer>
                {lists
                  .sort((a, b) => a.order - b.order)
                  .map((list: ICard) => (
                    <CardSkeleton />
                  ))}
                <S.AddListWrapper onClick={handleAddList}>
                  <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
                </S.AddListWrapper>
              </S.ListContainer>
            </S.RightWrapper>
          ) : (
            <S.RightWrapper>
              <S.ListContainer className="column">
                {lists
                  .sort((a, b) => a.order - b.order)
                  .map((list: ICard) => (
                    <Card
                      title={list.title}
                      key={list.id}
                      cardId={list.id}
                      UpdateList={fetchList}
                    />
                  ))}
              </S.ListContainer>
              <S.AddListWrapper onClick={handleAddList}>
                <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
              </S.AddListWrapper>
            </S.RightWrapper>
          )}
        </Default>

        <Mobile>
          <S.MobileRightWrapper>
            <S.ListMobileContiner className="column">
              {lists
                .sort((a, b) => a.order - b.order)
                .map((list: ICard) => (
                  <Card
                    title={list.title}
                    key={list.id}
                    cardId={list.id}
                    UpdateList={fetchList}
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
