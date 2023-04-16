import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Home from "../../pages";

const meta: Meta<typeof Home> = {
  title: "Components/Pages/Home",
  component: Home,
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  render: () => <Home />,
};
