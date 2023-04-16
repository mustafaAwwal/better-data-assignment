import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import React from "react";
import { mockProducts } from "../../../mocks/products/mocks";
import Products from "../../pages/products";
import { render, screen, waitFor } from "../../test-utils";

const mockUseRouter = useRouter as jest.Mock;
const mockPush = jest.fn();

const setup = () => {
  render(<Products />);
};

describe("<Products />", () => {
  beforeAll(() => {
    mockUseRouter.mockReturnValue({ query: { search: "" }, push: mockPush });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render without error", () => {
    setup();
  });

  it("should render all products", async () => {
    setup();
    expect(await screen.findAllByTestId(/product-card/i)).toHaveLength(
      mockProducts.length
    );
  });
  it("should reroute to correct product", async () => {
    setup();
    const { id } = mockProducts[0];
    const card = await screen.findByTestId(`product-card-${id}`);
    userEvent.click(card);
    await waitFor(() => expect(mockPush).toBeCalledWith(`/products/${id}`));
  });
  it("should show filtered by search products only", async () => {
    mockUseRouter.mockReturnValue({
      query: { search: mockProducts[0].title },
    });
    setup();
    expect(await screen.findAllByTestId(/product-card/i)).toHaveLength(1);
  });
});
