import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  const handleClick = jest.fn();

  const buttonProps = {
    label: "Test",
    className: "button-test",
    onClick: handleClick,
  };

  it("Render button", () => {
    render(
      <Button className={buttonProps.className} onClick={buttonProps.onClick}>
        {buttonProps.label}
      </Button>
    );

    expect(screen.getByText(buttonProps.label)).toBeDefined();
  });

  it("Button click", () => {
    render(
      <Button className={buttonProps.className} onClick={buttonProps.onClick}>
        {buttonProps.label}
      </Button>
    );
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
