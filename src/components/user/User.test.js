import User from "@/components/user/User";
import { render, waitFor } from "@testing-library/react";

describe("User component", () => {
  it("should get corret user data and render it", async () => {
    const user = {
      id: 1,
      name: "Tim",
      phone: "123456789",
      email: "test@test.com",
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      // @ts-ignore
      Promise.resolve({
        json: () => Promise.resolve(user),
      })
    );
    render(<User id={1}></User>);

    await waitFor(() => {
      expect(document.querySelector("summary").textContent).toBe(user.name);
      expect(document.querySelector("strong").textContent).toBe(user.phone);
      expect(document.querySelector("details")).toHaveTextContent(user.email);
    });
  });
});
