import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import React from "react";
import { mockCategories, mockProducts } from "../../../mocks/products/mocks";
import ProductsByCategory from "../../pages/products/category/[category]";
import { render, screen, waitFor } from "../../test-utils";

const mockUseRouter = useRouter as jest.Mock;
const mockReplace = jest.fn();
const mockPush = jest.fn();

const category = mockCategories[0];
const categoryProducts = mockProducts.filter(
  (product) => product.category === category
);
const product = categoryProducts[0];
const setup = () => {
  render(<ProductsByCategory />);
  const searchInCategory = screen.getByLabelText(`Search in ${category}`);
  return { searchInCategory };
};

describe("<ProductsByCategory />", () => {
  beforeAll(() => {
    mockUseRouter.mockReturnValue({
      query: {
        search: "",
        searchInCategory: "",
        category,
      },
      replace: mockReplace,
      push: mockPush,
    });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render without error", () => {
    setup();
  });

  it("should have all category products", async () => {
    setup();
    expect(await screen.findAllByTestId(/product-card/i)).toHaveLength(
      categoryProducts.length
    );
  });

  it("should update search value", async () => {
    const { searchInCategory } = setup();
    userEvent.type(searchInCategory, "hello");
    await waitFor(() =>
      expect(mockReplace).toBeCalledWith({
        query: { searchInCategory: "hello", category },
      })
    );
  });

  it("should filter the products by search", async () => {
    mockUseRouter.mockReturnValue({
      query: {
        search: "",
        searchInCategory: product?.title,
        category,
      },
      replace: mockReplace,
    });
    const { searchInCategory } = setup();
    expect(await screen.findAllByTestId(/product-card/i)).toHaveLength(1);
    expect(
      await screen.findByTestId(`product-card-${product.id}`)
    ).toBeVisible();
    expect(searchInCategory).toHaveValue(product?.title);
  });
});
