import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import * as S from './styles';
import SideBar from '@/components/SideBar/SideBar';
import axios from 'axios';

export default function Board() {
  // Sample Data
  const [items, setItems] = useState([
    { idx: 1, content: 'a' },
    { idx: 2, content: 'b' },
  ]);
  const [member, setMember] = useState([]);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        idx: items.length,
        content: '',
      },
    ]);
  };

  useEffect(() => {
    axios
      .get('https://pimfy-prello.netlify.app/getMemberData.json')
      .then((res) => setMember(res.data));
  }, []);

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
        <S.RightWrapper>
          <S.ListWrapper>
            <S.ListHeader>
              <h1>To Do</h1>
              <span>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </S.ListHeader>
            {items.map((item, idx) => (
              <S.Item defaultValue={item.content} key={idx} />
            ))}
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
    </S.Container>
  );
}
