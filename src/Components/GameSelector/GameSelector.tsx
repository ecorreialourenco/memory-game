import { useContext } from "react";
import cn from "classnames";
import { GameContext } from "../../Context";
import { Button, GameContainer } from "..";
import { gameOptions } from "../../Utils/variables";
import { GameType } from "../../Models/type.module";

import styles from "./GameSelector.module.css";

interface GameSelectorProps {
  onSelect: () => void;
}

export const GameSelector = ({ onSelect }: GameSelectorProps) => {
  const { type, setType } = useContext(GameContext);

  return (
    <GameContainer>
      <div className={styles.gameSelector}>
        {gameOptions.map((option: GameType) => (
          <Button
            key={option.role}
            className={cn({ [styles.selected]: type === option.role })}
            onClick={() => setType(option.role)}
          >
            <div>
              {option.title}
              <div className={styles.optionLabel}>
                ({option.column}x{option.row})
              </div>
            </div>
          </Button>
        ))}

        <Button onClick={onSelect}>New Game</Button>
      </div>
    </GameContainer>
  );
};
