import React from "react";
import { Section } from "features/AddUserForm/styled";
import { Form } from "formik";

interface IAddUserFormView {
  fieldsObj: { [name: string]: React.ReactElement };
  handleSubmit: any;
}
function ChildFormView({ fieldsObj, handleSubmit }: IAddUserFormView) {
  return (
    <Form onSubmit={handleSubmit}>
      <Section>{Object.keys(fieldsObj).map((key) => fieldsObj[key])}</Section>
      <button type="submit">asd</button>
    </Form>
  );
}
export default ChildFormView;
