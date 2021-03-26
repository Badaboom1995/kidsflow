import React from "react";
import UserFormView from "./view";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function UserForm() {
  const yupSchema = Yup.object({
    fullName: Yup.string().required("Обязательное поле"),
    email: Yup.string()
      .email("Некорректный Email")
      .required("Обязательное поле"),
    password: Yup.string().required("Обязательное поле"),
    login: Yup.string().required("Обязательное поле"),
    phone: Yup.string().required("Обязательное поле"),
  });

  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={yupSchema}
    >
      {(props) => (
        <Form>
          <UserFormView {...props} />
        </Form>
      )}
    </Formik>
  );
}
export default UserForm;
