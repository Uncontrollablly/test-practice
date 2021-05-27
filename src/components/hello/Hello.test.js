import Hello from "@/components/hello/Hello";
import { render, screen } from "@testing-library/react";

describe("Hello component", () => {
  test("should show default message if passed name prop", () => {
    // given pass name prop
    const name = "xxx";
    // when render finished
    render(<Hello name={name}></Hello>);
    // then there should show '你好，{props.name}！'
    expect(
      screen.getByText(`你好，${name}`, { exact: false })
    ).toBeInTheDocument();
  });

  test("should show default message if not passed name prop", () => {
    // given not pass name prop
    // when render finished
    render(<Hello></Hello>);
    // then there should show '嘿，陌生人'
    expect(screen.getByText("嘿，陌生人")).toBeInTheDocument();
  });
});
