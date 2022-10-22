import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/react";

import Fetch from "./Fetch";

describe("Fetch", () => {
  it("should load result", async () => {
    render(<Fetch />);

    expect(screen.getByText("Loading")).toBeInTheDocument();

    // 1)
    expect(await screen.findAllByRole("listItem")).toHaveLength(2);

    // 2)
    await waitFor(() => expect(screen.getAllByRole("listitem"))).toHaveLength(
      2
    );
  });
});
