import React from "react";
import { Wrapper } from "./styled";
import Input from "parts/Input";
import { Formik } from "formik";
import { FromArea, Fields, FieldLabel, AuthButton } from "./styled";
import Logo from "parts/Logo";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "ducks/user/actions";
import { isUserLoading } from "ducks/user/selectors";

function AuthFormView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isUserLoading);
  return (
    <Wrapper>
      <Formik
        onSubmit={(values) => {
          dispatch(auth(values));
        }}
        initialValues={{}}
      >
        <FromArea>
          <Logo big />
          <Fields>
            <FieldLabel>Логин</FieldLabel>
            <Input centered name="phoneNumber" placeholder="---" />
            <FieldLabel>Пароль</FieldLabel>
            <Input centered name="password" placeholder="---" />
          </Fields>
          <AuthButton>{isLoading ? "Загрузка..." : "Войти"}</AuthButton>
        </FromArea>
      </Formik>
    </Wrapper>
  );
}
export default AuthFormView;
