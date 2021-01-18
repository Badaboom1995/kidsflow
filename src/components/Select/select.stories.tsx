import React from "react";
import Select from ".";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";

export default {
  component: Select,
  title: "Select",
};

const Template: Story<any> = (args) => (
  <Formik initialValues={{ terms: true }} onSubmit={() => {}}>
    {(props: any) => <Select {...args} />}
  </Formik>
);

export const Default: any = Template.bind({});
Default.args = {
  title: "Select country",
  options: ["Latvia", "Libia"],
  groupName: "country",
  error: "Error",
};

export const Error: any = Template.bind({});
Error.args = {
  title: "Select country",
  options: ["Latvia", "Libia"],
  groupName: "country",
  error: "Error",
  touched: true,
};
