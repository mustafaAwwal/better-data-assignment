import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Products from "../../pages/products";

const meta: Meta<typeof Products> = {
  title: "Components/Pages/Products",
  component: Products,
};

export default meta;

type Story = StoryObj<typeof Products>;

export const Default: Story = {
  render: () => <Products />,
};
