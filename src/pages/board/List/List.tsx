import { Default, Mobile } from '@/utils/mediaQuery';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import DropDownMenu from '../DropDownMenu/dropDownMenu';
import * as S from '../styles';
import Tile from '../Tile/Tile';

interface IBoardProps {
  title: string;
  handleDeleteCard: (e: any) => void;
}

interface ICard {
  id: number;
  text: string;
}

const List: React.FC<IBoardProps> = ({ title, handleDeleteCard }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [cards, setCards] = useState<ICard[]>([]);

  const handleSubmit = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();

    if (text.length !== 0) {
      const card = {
        id: cards.length + 1,
        text,
      };

      setCards([...cards, card]);
      setText('');
    }
  };

  const handleDeleteItems = () => {
    setCards([]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setText('');
  };

  return (
    <div>
      <Default>
        <S.ListWrapper draggable="true">
          <S.ListHeader>
            <input
              defaultValue={title}
              placeholder={'카드 제목을 입력해주세요'}
            />
            <S.MenuBtn>
              <FontAwesomeIcon
                icon={faEllipsis}
                onClick={() => setShowMenu(!showMenu)}
              />
              {showMenu && (
                <DropDownMenu
                  handleDeleteCard={handleDeleteCard}
                  handleDeleteItems={handleDeleteItems}
                />
              )}
            </S.MenuBtn>
          </S.ListHeader>
          <ReactSortable
            className="itemWrapper"
            group="shared"
            animation={200}
            delay={1}
            swap
            multiDrag
            setList={setCards}
            list={cards}
          >
            {cards.map((card: ICard) => (
              <Tile key={card.id}>{card.text}</Tile>
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
            setList={setCards}
            list={cards}
          >
            {cards.map((card: ICard) => (
              <Tile key={card.id}>{card.text}</Tile>
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

export default List;
