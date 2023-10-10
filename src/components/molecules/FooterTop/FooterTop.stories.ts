import type { Meta, StoryObj } from "@storybook/react";

import FooterTop from "./index";

const meta = {
  title: "Molecules/Footer/FooterTop",
  component: FooterTop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FooterTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
