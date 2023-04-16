import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Product from "../../pages/products/[id]";

const meta: Meta<typeof Product> = {
  title: "Components/Pages/Product",
  component: Product,
  parameters: {
    nextjs: {
      router: {
        query: {
          id: "1",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {
  render: () => <Product />,
};
