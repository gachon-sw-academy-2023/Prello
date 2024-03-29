import request from '@/utils/api';
import { Default, Mobile } from '@/utils/mediaQuery';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import DropDownMenu from '../DropDownMenu/dropDownMenu';
import Item from '../Item/Item';
import * as S from '../styles';
interface ICard {
  id: number;
  title: string;
  order: number;
}
interface ICardProp {
  title: string;
  cardId: number;
  UpdateList: (list: ICard[]) => void;
}

interface IItem {
  id: number;
  title: string;
  order: number;
  cardId: number;
}

const Card: React.FC<ICardProp> = ({ title, cardId, UpdateList }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    request
      .get('/api/v1/items/', { params: { cardId } })
      .then((res) =>
        setItems(res.data.sort((a: IItem, b: IItem) => a.order - b.order)),
      );
  }, []);

  const handleSubmit = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();

    if (text.length !== 0) {
      const item = {
        title: text,
        order: items.length,
        cardId,
      };

      request
        .post('/api/v1/items', {
          ...item,
        })
        .then((res) => setItems(res.data));

      setText('');
    }
  };

  const handleDeleteItems = () => {
    setItems([]);
    setShowForm(false);
    request.delete(`/api/v1/items/${cardId}`);
  };

  const handleCancel = () => {
    setShowForm(false);
    setText('');
  };

  const handleChangeTitle = (e: any) => {
    axios.put('/api/v1/cards/title', { title: e.target.value, cardId });
  };

  useEffect(() => {
    if (items != undefined)
      setItems(items.sort((a: IItem, b: IItem) => a.order - b.order));
  }, [items]);

  const fetchItems = (item: IItem[]) => {
    setItems(item);
  };

  return (
    <div data-testid="created-card">
      <Default>
        <S.ListWrapper key={cardId}>
          <S.ListHeader draggable="true">
            <input
              defaultValue={title}
              placeholder={'카드 제목을 입력해주세요'}
              onChange={handleChangeTitle}
            />
            <S.MenuBtn>
              <FontAwesomeIcon
                icon={faEllipsis}
                onClick={() => setShowMenu(!showMenu)}
                test-id="menu-btn"
              />
              {showMenu && (
                <DropDownMenu
                  UpdateList={UpdateList}
                  handleDeleteItems={handleDeleteItems}
                  cardId={cardId}
                />
              )}
            </S.MenuBtn>
          </S.ListHeader>
          <ReactSortable
            className="itemWrapper"
            id={`${cardId}`}
            group="shared"
            animation={200}
            delay={1}
            swap
            multiDrag
            setList={setItems}
            list={items}
            onEnd={(e) => {
              axios.put('/api/v1/items', {
                id: parseInt(e.item.id),
                oldCardIndex: parseInt(e.from.id),
                newCardIndex: parseInt(e.to.id),
                oldIndex: e.oldIndex,
                newIndex: e.newIndex,
              });
            }}
            onChange={() => fetchItems(items)}
          >
            {items.map((item: IItem) => (
              <Item key={item.id} itemId={item.id} fetchItems={fetchItems}>
                {item.title}
              </Item>
            ))}
          </ReactSortable>
          {!showForm && (
            <S.AddBtn onClick={() => setShowForm(true)}>
              <span>+</span>
              <S.AddBtnText>Add a card</S.AddBtnText>
            </S.AddBtn>
          )}
          {showForm && (
            <S.Form onSubmit={handleSubmit}>
              <S.FormInput
                data-testid="input_item"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="아이템 입력하기"
              />
              <S.BtnWrapper>
                <button type="submit">Add Item</button>
                <button type="submit" onClick={() => handleCancel()}>
                  Cancel
                </button>
              </S.BtnWrapper>
            </S.Form>
          )}
        </S.ListWrapper>
      </Default>

      <Mobile>
        <S.MobileListWrapper key={cardId}>
          <S.ListHeader draggable="true">
            <input
              defaultValue={title}
              placeholder={'카드 제목을 입력해주세요'}
              onChange={handleChangeTitle}
            />
            <S.MenuBtn>
              <FontAwesomeIcon
                icon={faEllipsis}
                onClick={() => setShowMenu(!showMenu)}
                test-id="menu-btn"
              />
              {showMenu && (
                <DropDownMenu
                  UpdateList={UpdateList}
                  handleDeleteItems={handleDeleteItems}
                  cardId={cardId}
                />
              )}
            </S.MenuBtn>
          </S.ListHeader>
          <ReactSortable
            className="itemWrapper"
            id={`${cardId}`}
            group="shared"
            animation={200}
            delay={1}
            swap
            multiDrag
            setList={setItems}
            list={items}
            onEnd={(e) => {
              axios.put('/api/v1/items', {
                id: parseInt(e.item.id),
                oldCardIndex: parseInt(e.from.id),
                newCardIndex: parseInt(e.to.id),
                oldIndex: e.oldIndex,
                newIndex: e.newIndex,
              });
            }}
            onChange={() => fetchItems(items)}
          >
            {items.map((item: IItem) => (
              <Item key={item.id} itemId={item.id} fetchItems={fetchItems}>
                {item.title}
              </Item>
            ))}
          </ReactSortable>
          {!showForm && (
            <S.AddBtn onClick={() => setShowForm(true)}>
              <span>+</span>
              <S.AddBtnText>Add a card</S.AddBtnText>
            </S.AddBtn>
          )}
          {showForm && (
            <S.Form onSubmit={handleSubmit}>
              <S.FormInput
                data-testid="input_item"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="아이템 입력하기"
              />
              <S.BtnWrapper>
                <button type="submit">Add Item</button>
                <button type="submit" onClick={() => handleCancel()}>
                  Cancel
                </button>
              </S.BtnWrapper>
            </S.Form>
          )}
        </S.MobileListWrapper>
      </Mobile>
    </div>
  );
};

export default Card;
