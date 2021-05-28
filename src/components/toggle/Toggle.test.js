import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from "./Toggle";

describe("Toggle component", () => {
  test("update text when click", () => {
    render(<Toggle></Toggle>);

    const toggleBtn = screen.getByTestId("toggle");

    expect(toggleBtn.innerHTML).toBe("Turn on");

    fireEvent.click(toggleBtn);
    expect(toggleBtn.innerHTML).toBe("Turn off");

    fireEvent.click(toggleBtn);
    expect(toggleBtn.innerHTML).toBe("Turn on");
  });
});
