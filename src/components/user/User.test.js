import User from "@/components/user/User";
import { render, waitFor } from "@testing-library/react";

describe("User component", () => {
  // 'it' = 'test'
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

    const { container } = render(<User id={1}></User>);

    await waitFor(() => {
      expect(container.querySelector("summary").textContent).toBe(user.name);
      expect(container.querySelector("strong").textContent).toBe(user.phone);
      expect(container.querySelector("details")).toHaveTextContent(user.email);
    });
  });
});
