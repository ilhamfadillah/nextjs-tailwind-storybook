import type { Meta, StoryObj } from "@storybook/react";

import FormCheckbox from "./FormCheckbox";

const meta = {
  title: "Atoms/Input/FormCheckbox",
  component: FormCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isChecked: true,
    description: "Testing this from storybook",
  },
};
