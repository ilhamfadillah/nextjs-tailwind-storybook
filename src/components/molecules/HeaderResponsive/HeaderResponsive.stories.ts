import type { Meta, StoryObj } from "@storybook/react";

import HeaderResponsive from "./index";

const meta = {
  title: "Molecules/Header/HeaderResponsive",
  component: HeaderResponsive,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderResponsive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
