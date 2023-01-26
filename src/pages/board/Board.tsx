import { Default, Mobile } from '@/utils/mediaQuery';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import * as S from './styles';
import Tile from './Tile';

interface IBoardProps {
  title: string;
}

interface ICard {
  id: number;
  text: string;
}

const Board: React.FC<IBoardProps> = ({ title }) => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState<string>('');
  const [cards, setCards] = useState<ICard[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const card = {
      id: cards.length + 1,
      text,
    };

    setCards([...cards, card]);
    setText('');
  };

  return (
    <div>
      <Default>
        <S.ListWrapper draggable="true">
          <S.ListHeader>
            <h1>{title}</h1>
            <span>
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </S.ListHeader>
          <S.ItemWrapper
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
          </S.ItemWrapper>
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
              />
              <button type="submit">✅</button>
              <button type="submit" onClick={() => setShowForm(false)}>
                ⛔
              </button>
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
          <S.ItemWrapper
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
          </S.ItemWrapper>
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
              />
              <button type="submit">✅</button>
              <button type="submit" onClick={() => setShowForm(false)}>
                ⛔
              </button>
            </S.Form>
          )}
        </S.MobileListWrapper>
      </Mobile>
    </div>
  );
};

export default Board;
