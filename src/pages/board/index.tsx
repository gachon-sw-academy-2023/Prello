import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useRef } from 'react';
import {
  Container,
  Header,
  HeaderDiv,
  Title,
  Divider,
  BoardName,
  SearchBar,
  HeaderImg,
  Wrapper,
  LeftWrapper,
  RightWrapper,
  BarInfo,
  BarImg,
  WorkspaceName,
  HorDivider,
  MenuWrapper,
  Menu,
  ListWrapper,
  ListHeader,
  Item,
  AddBtn,
  AddListBtn,
} from './styles';

export default function Board() {
  const [items, setItems] = useState([
    { idx: 1, content: 'a' },
    { idx: 2, content: 'b' },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        idx: items.length,
        content: '',
      },
    ]);
  };
  return (
    <Container>
      <Header>
        <HeaderDiv style={{ justifyContent: 'left' }}>
          <Title>Prello</Title>
          <Divider />
          <BoardName>First Board</BoardName>
        </HeaderDiv>
        <HeaderDiv style={{ justifyContent: 'right' }}>
          <SearchBar placeholder="Search" />
          <HeaderImg src="src/assets/authorization/pimfy_profile.png" />
        </HeaderDiv>
      </Header>
      <Wrapper>
        <LeftWrapper>
          <BarInfo>
            <BarImg src="src/assets/authorization/pimfy_profile.png" />
            <WorkspaceName>PIMFY</WorkspaceName>
          </BarInfo>
          <HorDivider />
          <MenuWrapper>
            <Menu>
              <h1>Boards</h1>
              <FontAwesomeIcon icon={faAngleDown} />
            </Menu>
            <Menu>
              <h1>Members</h1>
              <FontAwesomeIcon icon={faAngleDown} />
            </Menu>
          </MenuWrapper>
          <HorDivider />
          <Menu>Settings</Menu>
        </LeftWrapper>
        <RightWrapper>
          <ListWrapper>
            <ListHeader>
              <h1>To Do</h1>
              <span>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </ListHeader>
            {items.map((item, idx) => (
              <Item defaultValue={item.content} key={idx} />
            ))}
            <AddBtn onClick={addItem}>
              <span>+</span>
              <span style={{ marginLeft: '10px' }}>Add a card</span>
            </AddBtn>
          </ListWrapper>
          c
          <ListWrapper style={{ padding: '15px 40px' }}>
            <AddListBtn>+ ADD ANOTHER LIST</AddListBtn>
          </ListWrapper>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
}
