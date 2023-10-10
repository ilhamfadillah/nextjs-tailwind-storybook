import type { Meta, StoryObj } from "@storybook/react";

import MainGridRight from "./index";

const meta = {
  title: "Molecules/Main/MainGridRight",
  component: MainGridRight,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MainGridRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
