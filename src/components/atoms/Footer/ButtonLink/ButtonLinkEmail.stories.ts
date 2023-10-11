import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLinkEmail } from "./ButtonLink";

const meta = {
  title: "Atoms/Button/ButtonLinkEmail",
  component: ButtonLinkEmail,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLinkEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    linkTo: "https://google.com",
    label: "my@email.com"
  }
};
