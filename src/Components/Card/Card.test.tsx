import { act, fireEvent, render } from "@testing-library/react";
import { Card } from "./Card";
import { item } from "../../test/__ mocks __/mockData";

describe("Card", () => {
  const handleClick = jest.fn();

  it("Render card", () => {
    const { getByTestId } = render(
      <Card
        item={item}
        handleSelectedCards={handleClick}
        toggled={false}
        stopflip={false}
      />
    );

    expect(getByTestId("card-img").getAttribute("src")).toBe("");
  });

  it("Flip card", () => {
    jest.useFakeTimers();
    const { rerender, getByTestId, getByRole } = render(
      <Card
        item={item}
        handleSelectedCards={handleClick}
        toggled={false}
        stopflip={false}
      />
    );

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalled();

    rerender(
      <Card
        item={item}
        handleSelectedCards={handleClick}
        toggled={true}
        stopflip={false}
      />
    );

    expect(getByTestId("card-img").getAttribute("src")).toBe(item.img);

    rerender(
      <Card
        item={item}
        handleSelectedCards={handleClick}
        toggled={false}
        stopflip={false}
      />
    );

    act(() => jest.runAllTimers());

    expect(getByTestId("card-img").getAttribute("src")).toBe("");
  });
});
