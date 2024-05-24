import { render } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  it("Render Title", () => {
    const { getByText } = render(<Title />);

    expect(getByText("Memory Game")).toBeDefined();
  });
});
