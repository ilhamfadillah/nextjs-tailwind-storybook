import type { Meta, StoryObj } from "@storybook/react";

import FormInput from "./FormInput";

const meta = {
  title: "Atoms/Input/FormInput",
  component: FormInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "text",
    placeholder: "Username",
    showMessage: true,
    errorMessage: "This is a required"
  },
};
