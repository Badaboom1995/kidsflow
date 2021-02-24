import React from "react";
import Button from "./index";
import { Story } from "@storybook/react/types-6-0";
import { ButtonProps } from "./types";

export default {
  component: Button,
  title: "Button",
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  children: "Button",
  disabled: false,
};
export const Disabled: any = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};
export const Loading: any = Template.bind({});
Loading.args = {
  children: "Button",
  loading: true,
};
