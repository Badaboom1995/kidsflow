import React from "react";
import Input from ".";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import { InputInterface } from "./types";

import password from "../../features/Auth/assets/password.svg";

export default {
  component: Input,
  title: "Input",
};

const Template: Story<any> = (args) => (
  <Formik initialValues={{ name: "John Doe" }} onSubmit={() => {}}>
    {(props: InputInterface) => (
      <Input {...args} children={<span>Checkbox</span>} />
    )}
  </Formik>
);

export const Default: any = Template.bind({});
Default.args = {
  name: "name",
  title: "Default",
  children: "Check",
};

export const Error: any = Template.bind({});
Error.args = {
  name: "name",
  title: "Ju1455^$#",
  error: "Password must contain at least 6 symbols",
  touched: true,
};

export const Icon: any = Template.bind({});
Icon.args = {
  name: "name",
  title: "Icon",
  icon: password,
};
