import type { Meta, StoryObj } from "@storybook/react";

import FormTextarea from "./FormTextarea";

const meta = {
  title: "Atoms/Textarea/FormTextarea",
  component: FormTextarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Username",
    showMessage: true,
    errorMessage: "This is a required"
  },
};
