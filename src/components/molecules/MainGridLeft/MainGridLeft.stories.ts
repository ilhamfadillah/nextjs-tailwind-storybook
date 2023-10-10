import type { Meta, StoryObj } from "@storybook/react";

import MainGridLeft from "./index";

const meta = {
  title: "Molecules/Main/MainGridLeft",
  component: MainGridLeft,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MainGridLeft>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
