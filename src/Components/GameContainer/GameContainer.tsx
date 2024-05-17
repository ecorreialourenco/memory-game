import { ReactNode } from "react";
import styles from "./GameContainer.module.css";
import { Title } from "../Title";

interface GameContainerProps {
  children: ReactNode;
}

export const GameContainer = ({ children }: GameContainerProps) => {
  return (
    <div className={styles.container}>
      <Title />
      {children}
    </div>
  );
};
