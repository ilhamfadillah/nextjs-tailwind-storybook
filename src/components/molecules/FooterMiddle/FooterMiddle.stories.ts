import type { Meta, StoryObj } from "@storybook/react";

import FooterMiddle from "./index";

const meta = {
  title: "Molecules/Footer/FooterMiddle",
  component: FooterMiddle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FooterMiddle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
