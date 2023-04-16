import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  parameters: {
    nextjs: {
      router: {
        query: {
          search: "default value in search",
        },
      },
    },
  },
  render: () => <Header />,
};
