import { useCallback, useContext, useEffect, useState } from "react";
import {
  CardsData,
  easyCardsData,
  hardCardsData,
  veryEasyCardsData,
} from "../../Utils";
import { Button, Card, GameContainer } from "..";
import { Item } from "../../Models";
import { GameContext } from "../../Context";

import styles from "./GameBoard.module.css";
import { gameOptions } from "../../Utils/variables";

interface GameBoardProps {
  onSelect: () => void;
}

export const GameBoard = ({ onSelect }: GameBoardProps) => {
  const { type } = useContext(GameContext);
  const gameTypeRole = gameOptions.find((item) => item.role === type);
  const [cardsArray, setCardsArray] = useState<Item[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [firstCard, setFirstCard] = useState<Item | null>(null);
  const [secondCard, setSecondCard] = useState<Item | null>(null);
  const [stopFlip, setStopFlip] = useState<boolean>(false);
  const [won, setWon] = useState<number>(0);

  const gameData = useCallback(() => {
    switch (type) {
      case "veryEasy":
        return veryEasyCardsData;
      case "easy":
        return easyCardsData;
      case "hard":
        return hardCardsData;
      default:
        return CardsData;
    }
  }, [type]);

  const NewGame = useCallback(() => {
    setTimeout(() => {
      const randomOrderArray: Item[] = gameData().sort(
        () => 0.5 - Math.random()
      );
      setCardsArray(randomOrderArray);
      setMoves(0);
      setFirstCard(null);
      setSecondCard(null);
      setWon(0);
    }, 1200);
  }, [gameData]);

  const handleSelectedCards = (item: Item) => {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  };

  const removeSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    NewGame();
  }, [NewGame]);

  useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true };
            } else {
              return unit;
            }
          });
        });
        setWon((preVal) => preVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  return (
    <GameContainer>
      <div className={styles.container}>
        <div
          className={styles.board}
          style={{
            gridTemplateColumns: `repeat(${gameTypeRole?.column ?? 2}, 8rem)`,
          }}
        >
          {cardsArray.map((item) => (
            <Card
              item={item}
              key={item.id}
              handleSelectedCards={handleSelectedCards}
              toggled={
                item === firstCard ||
                item === secondCard ||
                item.matched === true
              }
              stopflip={stopFlip}
            />
          ))}
        </div>

        <div className={styles.sidebar}>
          <div className={styles.comments}>
            {won !== cardsArray.length / 2 ? (
              <span>Moves : {moves}</span>
            ) : (
              <span>You Won in {moves} moves</span>
            )}
          </div>
          <Button onClick={NewGame}>New Game</Button>
          <Button onClick={onSelect}>Difficulty change</Button>
        </div>
      </div>
    </GameContainer>
  );
};
