import { useState } from "react";
import Card from "../Card/Card";
import Column from "../Column/Column";
import AddCard from "../AddCard/AddCard";
import { useDrop } from "react-dnd";

type CarProps = {
  id: string;
  message: string;
  focused: boolean;
};

export default function ColumnControlled({
  cards = [],
}: {
  cards: CarProps[];
}) {
  const [cardState, setCards] = useState(cards);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CARD",
      drop: () => console.log("DROP"),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  function setFocus(id: string) {
    console.log("Focusing on " + id);
    const newCardState = [...cardState];

    _setFocus(id, newCardState);

    setCards(newCardState);
  }

  function _setFocus(id: string, newCardState) {
    // console.log("Old State " + JSON.stringify(newCardState));
    newCardState.map((card) => {
      card.focused = card.id === id;
    });
    // console.log("New State " + JSON.stringify(newCardState));
  }

  function addCard(newCard) {
    const newCardState = [...cardState];
    newCardState.push(newCard);
    _setFocus(newCard.id, newCardState);
    setCards(newCardState);
  }

  function onBlur(id) {
    return function (message) {
      console.log("MEsage " + message);

      const newCardState = [...cardState];

      newCardState.map((card) => {
        if (card.id === id) {
          card.message = message;
          card.focused = false;
        }
      });
      console.log("Blur new state " + newCardState);
      setCards(newCardState);
    };
  }

  return (
    <Column heading="What worked" isOver={isOver}>
      {cardState.map((c) => (
        <Card
          key={c.id}
          focused={c.focused}
          focus={() => setFocus(c.id)}
          blur={onBlur(c.id)}
          message={c.message}
        ></Card>
      ))}
      <AddCard
        onAdd={() => {
          addCard({ id: Date.now() + "", message: "", focused: false });
        }}
      />
    </Column>
  );
}
