import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { WithSearchBar } from '@/components/SubHeader/SubHeader.stories';
import { workspaceSelector } from '@/recoil/atom/workspaceSelector';
import { Default, Mobile } from '@/utils/mediaQuery';
import { IWorkspace } from '@/utils/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Sortable from 'sortablejs';
import Card from './Card/Card';
import * as S from './styles';
interface ICard {
  id: number;
  title: string;
  order: number;
}

export default function Board() {
  const [lists, setLists] = useState<ICard[]>([]);
  const [member, setMember] = useState([]);
  const [workspace, setWorkpsace] =
    useRecoilState<IWorkspace>(workspaceSelector);

  useEffect(() => {
    axios
      .get('/members/list')
      .then((res) => setMember(res.data))
      .catch((error) => alert(error));
    UpdateList();
  }, []);

  useEffect(() => {
    setLists(lists);
  }, [lists]);

  const fetchList = (list: ICard[]) => {
    setLists(list);
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
  return (
    <S.Container>
      <Default>
        <WithSearchBar
          divider={true}
          children="first board"
          profileImg="public/assets/authorization/pimfy_profile.png"
          searchBar={true}
        />
      </Default>
      <Mobile>
        <MobileHeader profileImg="public/assets/authorization/pimfy_profile.png" />
      </Mobile>
      <S.Wrapper>
        <Default>
          <SideBar
            workspaceName={workspace.name}
            memberInfo={workspace.memberInfo}
          />
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
                    UpdateList={fetchList}
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
