import type { Meta, StoryObj } from "@storybook/react";

import Header from "./index";

const meta = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
