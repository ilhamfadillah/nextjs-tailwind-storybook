import type { Meta, StoryObj } from "@storybook/react";

import { FormSubmit } from "./FormSubmit";

const meta = {
  title: "Atoms/Button/FormSubmit",
  component: FormSubmit,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormSubmit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
