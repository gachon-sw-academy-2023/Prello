import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as S from './styles';
import SideBar from '@/components/SideBar/SideBar';
import axios from 'axios';
import { ReactSortable } from 'react-sortablejs';
import Sortable from 'sortablejs';

export default function Board() {
  const [member, setMember] = useState([]);
  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        content: '',
      },
    ]);
  };

  useEffect(() => {
    axios
      .get('https://pimfy-prello.netlify.app/getMemberData.json')
      .then((res) => setMember(res.data));
  }, []);

  const [items, setItems] = useState<any[]>([
    { id: 1, content: 'a' },
    { id: 2, content: 'b' },
  ]);
  const [items2, setItems2] = useState<any[]>([
    { id: 3, content: 'c' },
    { id: 4, content: 'd' },
  ]);

  const columns = document.querySelectorAll('.column');
  columns.forEach((column: any) => {
    new Sortable(column, {
      animation: 150,
      ghostClass: 'blue-background-class',
    });
  });

  return (
    <S.Container>
      <S.Header>
        <S.HeaderLeftDiv>
          <S.Title>Prello</S.Title>
          <S.Divider />
          <S.BoardName>First Board</S.BoardName>
        </S.HeaderLeftDiv>
        <S.HeaderRightDiv>
          <S.SearchBar placeholder="Search" />
          <S.HeaderImg />
        </S.HeaderRightDiv>
      </S.Header>
      <S.Wrapper>
        <SideBar memberInfo={member} />
        <S.RightWrapper className="column">
          <S.ListWrapper draggable="true">
            <S.ListHeader>
              <h1>To Do</h1>
              <span>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </S.ListHeader>

            <S.ItemWrapper list={items} setList={setItems} group="shared">
              {items.map((item) => (
                <S.Item key={item.id}>{item.content}</S.Item>
              ))}
            </S.ItemWrapper>
            <S.AddBtn onClick={handleAddItem}>
              <span>+</span>
              <S.AddBtnText>Add a card</S.AddBtnText>
            </S.AddBtn>
          </S.ListWrapper>

          <S.ListWrapper draggable="true">
            <S.ListHeader>
              <h1>Doing</h1>
              <span>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </S.ListHeader>
            <S.ItemWrapper list={items2} setList={setItems2} group="shared">
              {items2.map((item) => (
                <S.Item key={item.id}>{item.content}</S.Item>
              ))}
            </S.ItemWrapper>
            <S.AddBtn onClick={handleAddItem}>
              <span>+</span>
              <S.AddBtnText>Add a card</S.AddBtnText>
            </S.AddBtn>
          </S.ListWrapper>
          <S.AddListWrapper>
            <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
          </S.AddListWrapper>
        </S.RightWrapper>
      </S.Wrapper>
      {/* 
      <S.Header>
        <S.HeaderLeftDiv>
          <S.Title>Prello</S.Title>
          <S.Divider />
          <S.BoardName>First Board</S.BoardName>
        </S.HeaderLeftDiv>
        <S.HeaderRightDiv>
          <S.SearchBar placeholder="Search" />
          <S.HeaderImg />
        </S.HeaderRightDiv>
      </S.Header>
      <S.Wrapper>
        <SideBar memberInfo={member} />
        <S.RightWrapper>
          <S.ListWrapper>
            <S.ListHeader>
              <h1>To Do</h1>
              <span>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </S.ListHeader>
            <S.ItemWrapper list={items} setList={setItems} group="shared">
              {items.map((item) => (
                <S.Item key={item.id}>{item.content}</S.Item>
              ))}
            </S.ItemWrapper>

            <S.AddBtn onClick={handleAddItem}>
              <span>+</span>
              <S.AddBtnText>Add a card</S.AddBtnText>
            </S.AddBtn>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListHeader>
              <h1>Doing</h1>
              <span>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </S.ListHeader>
            <S.ItemWrapper list={items2} setList={setItems2} group="shared">
              {items2.map((item) => (
                <S.Item key={item.id}>{item.content}</S.Item>
              ))}
            </S.ItemWrapper>
            <S.AddBtn onClick={handleAddItem}>
              <span>+</span>
              <S.AddBtnText>Add a card</S.AddBtnText>
            </S.AddBtn>
          </S.ListWrapper>
          <S.AddListWrapper>
            <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
          </S.AddListWrapper>
        </S.RightWrapper>
      </S.Wrapper> */}
    </S.Container>
  );
}
