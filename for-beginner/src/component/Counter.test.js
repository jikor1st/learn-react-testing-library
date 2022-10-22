import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

it("should render Counter", async () => {
  render(<Counter />);

  const plusBtnTarget = screen.getByRole("button", { name: "+" });
  const minusBtnTarget = screen.getByRole("button", { name: "-" });

  userEvent.click(plusBtnTarget);
  expect(screen.getByText("1")).toBeTruthy();

  userEvent.click(minusBtnTarget);
  expect(screen.getByText("0")).toBeTruthy();

  // userEvent
});
