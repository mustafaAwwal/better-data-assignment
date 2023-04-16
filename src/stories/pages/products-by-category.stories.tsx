import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { mockCategories } from "../../../mocks/products/mocks";
import ProductsByCategory from "../../pages/products/category/[category]";

const meta: Meta<typeof ProductsByCategory> = {
  title: "Components/Pages/ProductsByCategory",
  component: ProductsByCategory,
  parameters: {
    nextjs: {
      router: {
        query: {
          category: mockCategories[0],
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductsByCategory>;

export const Default: Story = {
  render: () => <ProductsByCategory />,
};
