import React from "react";
import { Formik } from "formik";
import { Wrapper, Small, Big, FormContainer } from "./styled";
import Input from "parts/Input";

function DoubleInput() {
  return (
    <Wrapper>
      <Formik onSubmit={() => {}} initialValues={{}}>
        <FormContainer>
          <Small>
            <Input name="id" label="ID" />
          </Small>
          <Big>
            <Input name="fullName" label="ФИО" />
          </Big>
        </FormContainer>
      </Formik>
    </Wrapper>
  );
}
export default DoubleInput;
