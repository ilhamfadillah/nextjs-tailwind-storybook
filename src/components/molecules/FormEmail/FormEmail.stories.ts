import type { Meta, StoryObj } from "@storybook/react";

import { FormEmail } from "./FormEmail";

const meta = {
  title: "Molecules/Form/FormEmail",
  component: FormEmail,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: 'uxbee',
      values: [
        {
          name: 'uxbee',
          value: '#f5bb00',
        }
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
