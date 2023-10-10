import type { Meta, StoryObj } from "@storybook/react";

import ContactInformation from "./index";

const meta = {
  title: "Atoms/Contact/ContactInformation",
  component: ContactInformation,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactInformation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    logoSrc: "https://uxbee.eu/assets/images/contact/icon-03.svg",
    logoAlt: "phone",
    linkTo: "https://uxbee.eu",
    label: "00 31 (0) 15 - 79 00 100",
  },
};
