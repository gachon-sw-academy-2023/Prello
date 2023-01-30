import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { WithSearchBar } from '@/components/SubHeader/SubHeader.stories';
import { Default, Mobile } from '@/utils/mediaQuery';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import List from './List/List';
import * as S from './styles';

interface ICard {
  id: number;
  title: string;
}

export default function Board() {
  const [member, setMember] = useState([]);
  const handleAddList = () => {
    setLists([
      ...lists,
      {
        id: lists.length,
        title: 'new list',
      },
    ]);
  };

  useEffect(() => {
    axios
      .get('https://pimfy-prello.netlify.app/getMemberData.json')
      .then((res) => setMember(res.data));
  }, []);

  useEffect(() => {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column: any) => {
      new Sortable(column, {
        animation: 150,
        ghostClass: 'blue-background-class',
      });
    });
  });

  const [lists, setLists] = useState<ICard[]>([
    { id: 1, title: 'todo' },
    { id: 2, title: 'done' },
  ]);

  const handleDeleteCard = (e: any) => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
      'none';
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
          <SideBar memberInfo={member} />
        </Default>

        <Default>
          <S.RightWrapper>
            <S.ListContainer className="column">
              {lists.map((list: ICard) => (
                <List
                  title={list.title}
                  key={list.id}
                  handleDeleteCard={handleDeleteCard}
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
              {lists.map((list) => (
                <List
                  title={list.title}
                  key={list.id}
                  handleDeleteCard={handleDeleteCard}
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
