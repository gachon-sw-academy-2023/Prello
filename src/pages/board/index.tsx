import { MobileHeader } from '@/components/MobileHeader/MobileHeader';
import SideBar from '@/components/SideBar/SideBar';
import { WithSearchBar } from '@/components/SubHeader/SubHeader.stories';
import { Default, Mobile } from '@/utils/mediaQuery';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sortable from 'sortablejs';
import * as S from './styles';

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
      <Default>
        <WithSearchBar
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
            </S.ListContainer>
            <S.AddListWrapper>
              <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
            </S.AddListWrapper>
          </S.RightWrapper>
        </Default>

        <Mobile>
          <S.MobileRightWrapper>
            <S.ListMobileContiner className="column">
              <S.MobileListWrapper draggable="true">
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
              </S.MobileListWrapper>

              <S.MobileListWrapper draggable="true">
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
              </S.MobileListWrapper>
            </S.ListMobileContiner>
            <S.MobileAddListWrapper>
              <S.AddListBtn>+ ADD ANOTHER LIST</S.AddListBtn>
            </S.MobileAddListWrapper>
          </S.MobileRightWrapper>
        </Mobile>
      </S.Wrapper>
    </S.Container>
  );
}
