import React from "react";
import { Wrapper } from "./styled";
import Input from "parts/Input";
import { Formik } from "formik";
import { FromArea, Fields, FieldLabel, AuthButton } from "./styled";
import Logo from "parts/Logo";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "ducks/user/actions";
import { isUserLoading } from "ducks/user/selectors";
import { useHistory } from "react-router-dom";

function AuthFormView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isUserLoading);
  const history = useHistory();
  return (
    <Wrapper>
      <Formik
        onSubmit={(credentials) => {
          dispatch(auth({ credentials, history }));
        }}
        initialValues={{}}
      >
        <FromArea>
          <Logo big />
          <Fields>
            <FieldLabel>Логин</FieldLabel>
            <Input centered name="phoneNumber" placeholder="---" />
            <FieldLabel>Пароль</FieldLabel>
            <Input centered name="password" type="password" placeholder="---" />
          </Fields>
          <AuthButton>{isLoading ? "Загрузка..." : "Войти"}</AuthButton>
        </FromArea>
      </Formik>
    </Wrapper>
  );
}
export default AuthFormView;
