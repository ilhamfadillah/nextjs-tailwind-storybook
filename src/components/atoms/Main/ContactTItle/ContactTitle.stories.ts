import type { Meta, StoryObj } from "@storybook/react";

import ContactTitle from "./index";

const meta = {
  title: "Atoms/Contact/ContactTitle",
  component: ContactTitle,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    lineOne: "First Line",
    lineTwo: "Second Line",
  }
};
