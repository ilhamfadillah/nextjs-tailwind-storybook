import type { Meta, StoryObj } from "@storybook/react";

import { ButtonLinkPhone } from "./ButtonLink";

const meta = {
  title: "Atoms/Button/ButtonLinkPhone",
  component: ButtonLinkPhone,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLinkPhone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    linkTo: "https://google.com",
    label: "081 320 5501"
  }
};
