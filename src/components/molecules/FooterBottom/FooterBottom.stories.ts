import type { Meta, StoryObj } from "@storybook/react";

import FooterBottom from "./index";

const meta = {
  title: "Molecules/Footer/FooterBottom",
  component: FooterBottom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FooterBottom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
