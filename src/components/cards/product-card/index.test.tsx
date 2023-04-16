import React from "react";
import { ProductCard } from ".";
import { mockProducts } from "../../../../mocks/products/mocks";
import { render, screen } from "../../../test-utils";

const product = mockProducts[0];

const setup = () => {
  render(<ProductCard href="/products/1" product={product} />);
};

describe("<ProductCard />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render without error", () => {
    setup();
  });

  it("should render correct information", () => {
    setup();
    screen.getByText(product.title);
    screen.getByText(new RegExp(`price: \\$${product.price}`, "i"));
  });
});
