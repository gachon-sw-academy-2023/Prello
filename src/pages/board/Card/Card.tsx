import { Default, Mobile } from '@/utils/mediaQuery';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import DropDownMenu from '../DropDownMenu/dropDownMenu';
import Item from '../Item/Item';
import * as S from '../styles';

interface ICardProp {
  title: string;
  cardId: number;
  UpdateList: () => void;
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
    fatchItems();
  }, []);

  const handleSubmit = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();

    if (text.length !== 0) {
      const item = {
        title: text,
        order: items.length,
        cardId,
      };

      axios
        .post('/item/create', {
          ...item,
        })
        .then((res) => setItems(res.data));

      setText('');
    }
  };

  const handleDeleteItems = () => {
    setItems([]);
    setShowForm(false);
    axios.post('/item/clear', { cardId }).then((res) => console.log(res));
  };

  const handleCancel = () => {
    setShowForm(false);
    setText('');
  };

  const handleChangeTitle = (e: any) => {
    axios
      .post('/card/update-title', { title: e.target.value, cardId })
      .catch((error) => alert(error));
  };

  const fatchItems = () => {
    axios
      .get(`/list/item/${cardId}`)
      .then((res) =>
        setItems(res.data.sort((a: IItem, b: IItem) => a.order - b.order)),
      );
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
              axios.post('/item/update-index', {
                id: parseInt(e.item.id),
                oldCardIndex: parseInt(e.from.id),
                newCardIndex: parseInt(e.to.id),
                oldIndex: e.oldIndex,
                newIndex: e.newIndex,
              });
            }}
            onChange={fatchItems}
          >
            {items.map((item: IItem) => (
              <Item key={item.id} itemId={item.id}>
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
        <S.MobileListWrapper draggable="true">
          <S.ListHeader>
            <h1>{title}</h1>
            <span>
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </S.ListHeader>
          <ReactSortable
            className="itemWrapper"
            group="shared"
            animation={200}
            delay={1}
            swap
            multiDrag
            setList={setItems}
            list={items}
          >
            {items.map((item: IItem) => (
              <Item key={item.id} itemId={item.id}>
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
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="아이템 입력하기"
              />
              <S.BtnWrapper>
                <button type="submit">✅</button>
                <button type="submit" onClick={() => setShowForm(false)}>
                  ⛔
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
