import type { Meta, StoryObj } from "@storybook/react";

import { ButtonScrollTop } from "./ButtonScrollTop";

const meta = {
  title: "Atoms/Button/ButtonScrollTop",
  component: ButtonScrollTop,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonScrollTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
