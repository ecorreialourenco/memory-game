import { fireEvent, render } from "@testing-library/react";
import { GameSelector } from "./GameSelector";
import { gameOptions } from "../../Utils/variables";

describe("GameSelector", () => {
  const onSelect = jest.fn();

  it("Render GameSelector", () => {
    const { getByText, getAllByRole } = render(
      <GameSelector onSelect={onSelect} />
    );

    gameOptions.forEach((option) => {
      expect(getByText(option.title)).toBeDefined();
    });

    fireEvent.click(getAllByRole("button")[0]); // Select first option
    fireEvent.click(getAllByRole("button")[1]); // Switch to second option
    fireEvent.click(getByText("New Game")); // start game

    expect(onSelect).toHaveBeenCalled();
  });
});
