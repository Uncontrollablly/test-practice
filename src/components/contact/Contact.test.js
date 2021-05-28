import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

jest.mock("./map", () => {
  return function DummyMap(props) {
    return (
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    );
  };
});

describe("Contact component", () => {
  test("can render contact messages", () => {
    const center = { lat: 0, long: 0 };
    render(
      <Contact
        name="Joni Baez"
        email="test@example.com"
        site="http://test.com"
        center={center}
      />
    );

    expect(screen.getByTestId("email").getAttribute("href")).toEqual(
      "mailto:test@example.com"
    );

    expect(screen.getByTestId("site").getAttribute("href")).toEqual(
      "http://test.com"
    );

    expect(screen.getByTestId("map").textContent).toEqual("0:0");
  });
});
