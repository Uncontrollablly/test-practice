import { render, screen } from "@testing-library/react";
import Hello from "@/components/Hello";

describe("it should show name", () => {
  test("it should show default message if have name prop", () => {
    // given pass name prop
    const name = "xxx";
    // when render finished
    render(<Hello name={name}></Hello>);
    // then there should show '你好，{props.name}！'
    expect(
      screen.getByText(`你好，${name}`, { exact: false })
    ).toBeInTheDocument();
  });

  test("it should show default message if not have name prop", () => {
    // given not pass name prop
    // when render finished
    render(<Hello></Hello>);
    // then there should show '嘿，陌生人'
    expect(screen.getByText("嘿，陌生人")).toBeInTheDocument();
  });
});
