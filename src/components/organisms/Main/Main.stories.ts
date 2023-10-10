import type { Meta, StoryObj } from "@storybook/react";

import Main from "./index";

const meta = {
  title: "Organisms/Main",
  component: Main,
  parameters: {
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
