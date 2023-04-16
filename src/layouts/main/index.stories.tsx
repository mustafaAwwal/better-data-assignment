import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MainLayout } from ".";

const meta: Meta<typeof MainLayout> = {
  title: "Components/MainLayout",
  component: MainLayout,
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  render: () => (
    <MainLayout>
      <div>content</div>
    </MainLayout>
  ),
};
