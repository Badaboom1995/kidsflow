import React, { useEffect } from "react";
import { Section } from "features/AddUserForm/styled";
import { Form } from "formik";

interface IAddUserFormView {
  fieldsObj: { [name: string]: React.ReactElement };
  handleSubmit: any;
  saveSubmitFunc: (p: any) => void;
}
function ChildFormView({
  fieldsObj,
  handleSubmit,
  saveSubmitFunc,
}: IAddUserFormView) {
  return (
    <Form onSubmit={handleSubmit}>
      <Section>{Object.keys(fieldsObj).map((key) => fieldsObj[key])}</Section>
    </Form>
  );
}
export default ChildFormView;
