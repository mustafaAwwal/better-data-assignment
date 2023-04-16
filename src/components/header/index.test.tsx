import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import React from "react";
import { Header } from ".";
import { render, screen, waitFor } from "../../test-utils";

const mockReplace = jest.fn();
const mockToggle = jest.fn();

const setup = () => {
  render(<Header onToggle={mockToggle} />);
  const searchBar = screen.getByLabelText(/search products/i);
  const toggleButton = screen.getByLabelText(/side menu toggle/i);
  return { searchBar, toggleButton };
};

describe("<Header />", () => {
  beforeAll(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { search: "search" },
      replace: mockReplace,
    });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should run without error", () => {
    setup();
  });

  it("should call router replace with search query", async () => {
    const { searchBar } = setup();

    userEvent.type(searchBar, "hello");
    await waitFor(() =>
      expect(mockReplace).toBeCalledWith({
        pathname: "/products",
        query: { search: "searchhello" },
      })
    );
  });
  it("should have search value from query already prefilled", () => {
    const { searchBar } = setup();
    expect(searchBar).toHaveValue("search");
  });

  it("should have all the links", () => {
    setup();
    expect(screen.getByText(/home/i)).toBeVisible();
    expect(screen.getByText(/products/i)).toBeVisible();
  });

  it("should call onToggle function", async () => {
    const { toggleButton } = setup();
    userEvent.click(toggleButton);
    waitFor(() => expect(mockToggle).toBeCalled());
  });
});
