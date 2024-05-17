import { createContext } from "react";

interface InitialValue {
  type: string;
  setType: (value: string) => void;
}

const initialValue: InitialValue = {
  type: "easy",
  setType: () => {},
};

export const GameContext = createContext(initialValue);
