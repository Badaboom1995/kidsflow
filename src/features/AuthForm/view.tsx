import React from "react";
import { Wrapper } from "./styled";
import Input from "parts/Input";
import { Formik } from "formik";
import Button from "parts/Button";
import { FromArea, Fields, FieldLabel, AuthButton } from "./styled";
import Logo from "parts/Logo";

function AuthFormView() {
  return (
    <Wrapper>
      <Formik onSubmit={() => {}} initialValues={{}}>
        <FromArea>
          <Logo big />
          <Fields>
            <FieldLabel>Логин</FieldLabel>
            <Input centered name="one" placeholder="---" />
            <FieldLabel>Пароль</FieldLabel>
            <Input centered name="two" placeholder="---" />
          </Fields>
          <AuthButton>Войти</AuthButton>
        </FromArea>
      </Formik>
    </Wrapper>
  );
}
export default AuthFormView;
