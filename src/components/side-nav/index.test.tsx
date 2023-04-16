import userEvent from "@testing-library/user-event";
import React from "react";
import { SideNav } from ".";
import { mockCategories } from "../../../mocks/products/mocks";
import { render, screen, waitFor } from "../../test-utils";

const mockOnClose = jest.fn();
const setup = () => {
  render(<SideNav onClose={mockOnClose} />);
  const toggleButton = screen.getByLabelText(/close side nav/i);
  return { toggleButton };
};

describe("<SideNav />", () => {
  it("should render without error", () => {
    setup();
  });

  it("should show all categories", async () => {
    setup();
    await Promise.all(
      mockCategories.map((category) => screen.findByText(category))
    );
  });

  it("should call the onClose method", async () => {
    const { toggleButton } = setup();

    userEvent.click(toggleButton);
    await waitFor(expect(mockOnClose).toBeCalled);
  });
});
