import { GameType } from "../Models/type.module";

export type gameTypes = "easy" | "veryEasy" | "normal" | "hard";

export const gameOptions: GameType[] = [
  {
    title: "Very Easy",
    row: 2,
    column: 2,
    role: "veryEasy",
  },
  {
    title: "Easy",
    row: 2,
    column: 3,
    role: "easy",
  },
  {
    title: "Normal",
    row: 4,
    column: 4,
    role: "normal",
  },
  {
    title: "Hard",
    row: 4,
    column: 5,
    role: "hard",
  },
];
