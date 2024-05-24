import { act, fireEvent, render } from "@testing-library/react";
import { GameBoard } from "./GameBoard";

describe("GameBoard", () => {
  const onSelect = jest.fn();
  jest.useFakeTimers();

  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0;
  global.Math = mockMath;

  it("Render GameBoard", () => {
    const { getByRole } = render(<GameBoard onSelect={onSelect} />);

    expect(getByRole("img").getAttribute("alt")).toBe("loading...");
  });

  describe("Select cards", () => {
    it("2 different cards", () => {
      const { getAllByTestId } = render(<GameBoard onSelect={onSelect} />);
      act(() => jest.runAllTimers()); // jump loading state

      const cards = getAllByTestId("card-btn");
      const imgs = getAllByTestId("card-img");

      fireEvent.click(cards[0]); // select first card
      fireEvent.click(cards[1]); // select second card

      expect(imgs[0].getAttribute("src")).not.toBe(imgs[1].getAttribute("src"));
    });

    it("2 equal cards", () => {
      const { getAllByTestId } = render(<GameBoard onSelect={onSelect} />);
      act(() => jest.runAllTimers()); // jump loading state

      const cards = getAllByTestId("card-btn");
      const imgs = getAllByTestId("card-img");

      fireEvent.click(cards[0]); // select first card
      fireEvent.click(cards[cards.length / 2]); // select second card

      expect(imgs[0].getAttribute("src")).toBe(
        imgs[cards.length / 2].getAttribute("src")
      );
    });
  });
});
