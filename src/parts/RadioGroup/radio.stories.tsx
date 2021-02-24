import React from "react";
import RadioGroup from "./index";
import { Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";

export default {
  component: RadioGroup,
  title: "RadioGroup",
};

const Template: Story<any> = (args) => (
  <Formik initialValues={{ gender: "" }} onSubmit={() => {}}>
    {(props: any) => <RadioGroup {...args} />}
  </Formik>
);

export const Default: any = Template.bind({});
Default.args = {
  error: "",
  groupName: "gender",
  options: [
    { name: "Male", value: 1 },
    { name: "Female", value: 2 },
  ],
  touched: false,
};

export const Error: any = Template.bind({});
Error.args = {
  error: "Error messssage",
  touched: true,
  groupName: "gender",
  options: [
    { name: "Male", value: 1 },
    { name: "Female", value: 2 },
  ],
};

// export const Error: any = Template.bind({});
// Error.args = {
//   title: "Ju1455^$#",
//   error: "Password must contain at least 6 symbols",
// };

// export const Icon: any = Template.bind({});
// Icon.args = {
//   title: "Icon",
//   icon: password,
// };
