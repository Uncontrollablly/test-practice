import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./card";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("Card component", () => {
  test("超时后应选择 null", () => {
    const onSelect = jest.fn();
    render(<Card onSelect={onSelect} />);

    // // 提前 100 毫秒执行
    jest.advanceTimersByTime(100);
    expect(onSelect).not.toHaveBeenCalled();

    // 然后提前 5 秒执行
    jest.advanceTimersByTime(5000);
    expect(onSelect).toHaveBeenCalledWith(null);
  });

  test("移除时应进行清理", () => {
    const onSelect = jest.fn();
    const { unmount } = render(<Card onSelect={onSelect} />);

    jest.advanceTimersByTime(100);
    expect(onSelect).not.toHaveBeenCalled();

    // 卸载应用程序
    unmount();

    jest.advanceTimersByTime(5000);
    expect(onSelect).not.toHaveBeenCalled();
  });

  test("应接受选择", () => {
    const onSelect = jest.fn();
    render(<Card onSelect={onSelect} />);
    const element = screen.getByTestId("2");

    fireEvent.click(element);

    expect(onSelect).toHaveBeenCalledWith(2);
  });
});
