import { useRouter } from "next/router";
import React from "react";
import { mockProducts } from "../../../mocks/products/mocks";
import Product from "../../pages/products/[id]";
import { render, screen } from "../../test-utils";

const product = mockProducts[0];
const setup = () => {
  render(<Product />);
};

describe("<Product />", () => {
  beforeAll(() => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { id: product.id, search: "" },
    });
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render without error", () => {
    setup();
  });

  it("should render correct data", async () => {
    setup();
    await screen.findByText(product.title);
    screen.getByText(product.description);
    screen.getByText(`Price: $${product.price}`);
    screen.getByText(new RegExp(`Rating: ${product.rating.rate}`, "i"));
    screen.getByText(
      new RegExp(`(total reviews: ${product.rating.count})`, "i")
    );
  });
});
