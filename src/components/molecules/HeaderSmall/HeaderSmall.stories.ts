import type { Meta, StoryObj } from "@storybook/react";

import HeaderSmall from "./index";

const meta = {
  title: "Molecules/Header/HeaderSmall",
  component: HeaderSmall,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderSmall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
