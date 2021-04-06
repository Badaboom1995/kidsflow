import React from "react";
import { GridContainer } from "parts/styled";
import { Form } from "formik";
import { FormSectionTitle } from "parts/styled";

interface IAddUserFormView {
  title: string;
  fieldsObj: { [name: string]: React.ReactElement };
  handleSubmit: any;
  transparent: boolean;
}
function ChildFormView({
  fieldsObj,
  handleSubmit,
  title,
  transparent,
}: IAddUserFormView) {
  return (
    <Form onSubmit={handleSubmit}>
      <GridContainer transparent={transparent}>
        {title && (
          <FormSectionTitle offsetLeft={50} marginBottom={20}>
            {title}
          </FormSectionTitle>
        )}
        {Object.keys(fieldsObj).map((key) => fieldsObj[key])}
      </GridContainer>
    </Form>
  );
}
export default ChildFormView;
