import type { Meta, StoryObj } from "@storybook/react";

import HeaderLarge from "./index";

const meta = {
  title: "Molecules/Header/HeaderLarge",
  component: HeaderLarge,
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderLarge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
