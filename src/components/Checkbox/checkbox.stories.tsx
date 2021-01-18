import React from "react";
import Checkbox from ".";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import { CheckboxInterface } from "./types";

export default {
  component: Checkbox,
  title: "Checkbox",
};

const Template: Story<any> = (args) => (
  <Formik initialValues={{ terms: true }} onSubmit={() => {}}>
    {(props: CheckboxInterface) => <Checkbox {...args} />}
  </Formik>
);

export const Default: any = Template.bind({});
Default.args = {
  name: "terms",
  title: "Default",
  children: "Check",
  touched: [],
};

export const Error: any = Template.bind({});
Error.args = {
  name: "terms",
  error: "Password must contain at least 6 symbols",
  children: "Check",
  touched: { terms: true },
};
