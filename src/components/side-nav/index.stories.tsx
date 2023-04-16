import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SideNav } from ".";

const meta: Meta<typeof SideNav> = {
  title: "Components/SideNav",
  component: SideNav,
};

export default meta;

type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
  render: ({ open, onClose }) => <SideNav open={open} onClose={onClose} />,
  argTypes: {
    open: { type: "boolean" },
    onClose: { type: "function" },
  },
};
