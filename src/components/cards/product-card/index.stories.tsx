import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ProductCard } from ".";
import { mockProducts } from "../../../../mocks/products/mocks";

const meta: Meta<typeof ProductCard> = {
  title: "Components/Cards/ProductCard",
  component: ProductCard,
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

const mockProduct = mockProducts[0];

export const Default: Story = {
  render: ({ onClick }) => (
    <ProductCard
      onClick={onClick}
      product={mockProduct}
      href={`/products/${mockProduct.id}`}
    />
  ),
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onClick: { type: "function" },
  },
};
