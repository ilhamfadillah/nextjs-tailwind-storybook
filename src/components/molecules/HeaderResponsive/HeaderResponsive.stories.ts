import type { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import HeaderResponsive from "./index";

const meta = {
  title: "Molecules/Header/HeaderResponsive",
  component: HeaderResponsive,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
      defaultOrientation: "landscape"
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderResponsive>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
