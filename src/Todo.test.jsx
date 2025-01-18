import { render, screen } from "@testing-library/react";
import ShopContextProvider from "./Context";
import Todo from "./Todo";

describe("Todo Component", () => {
  it("renders input and button", () => {
    render(
      <ShopContextProvider>
        <Todo />
      </ShopContextProvider>
    );

    expect(
      screen.getByPlaceholderText("Developed by Sajid")
    ).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
