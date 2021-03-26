import React from "react";
import ChildFormView from "./view";
import { Formik } from "formik";
import * as Yup from "yup";
import { Item } from "features/AddUserForm/styled";
import Input from "parts/Input";
import Select from "parts/Select";

const formConfig = {
  settings: {
    defaultType: "text",
    defaultCol: 6,
  },
  fields: [
    { name: "name", label: "Имя" },
    { name: "surname", label: "Фамилия" },
    {
      name: "hairColor",
      options: [{ name: "asd", value: "some" }],
      label: "Цвет волос",
      col: 3,
      type: "select",
    },
    {
      name: "hairLength",
      label: "Длина волос",
      options: [{ name: "asd", value: "some" }],
      col: 3,
      type: "select",
    },
    {
      name: "gender",
      label: "Пол",
      col: 3,
      options: [
        { name: "asd", value: "some" },
        { name: "qew", value: "123" },
      ],
      type: "select",
    },
    {
      name: "height",
      label: "Рост",
      options: [{ name: "asd", value: "some" }],
      col: 3,
      type: "select",
    },
    { name: "eyeColor", label: "Цвет глаз" },
    { name: "birthDate", label: "Дата рождения" },
    { name: "socialLinks", label: "Соц.сети" },
    { name: "experience", label: "Опыт" },
    { name: "skills", label: "Навыки" },
    { name: "apperanceType", label: "Тип внешности" },
  ],
};
const makeYup = (yup) => {
  if (!yup) return Yup.string().required("Обязательное поле");
  const startYup = yup.optional
    ? Yup.string()
    : Yup.string().required("Обязательное поле");
  return yup.reduce((accum, item) => accum[item.key](...item.args), startYup);
};
const makeYupSchema = (fields: any[]) =>
  fields.reduce(
    (accum, field) => ({
      ...accum,
      [field.name || field.groupName]: makeYup(field.yup),
    }),
    {}
  );
const chooseFieldByType = (
  type: string,
  handleChange,
  props,
  errors,
  touched
) => {
  let field = null;
  if (type === "text") {
    field = (
      <Input
        {...props}
        error={errors[props.name]}
        touched={touched[props.name]}
      />
    );
  }
  if (type === "select") {
    field = (
      <Select
        {...props}
        title={props.title || "Выбрать..."}
        onChange={handleChange}
        error={errors[props.name]}
        touched={touched[props.name]}
      />
    );
  }
  return (
    <Item col={props.col || formConfig.settings.defaultCol} key={props.name}>
      {field}
    </Item>
  );
};
const makeFields = (errors, touched, handleChange) =>
  formConfig.fields.reduce(
    (accum, curr) => ({
      ...accum,
      [curr.name]: chooseFieldByType(
        curr.type || formConfig.settings.defaultType,
        handleChange,
        curr,
        errors,
        touched
      ),
    }),
    {}
  );

function ChildForm() {
  const yupSchema = Yup.object(makeYupSchema(formConfig.fields));

  return (
    <Formik
      initialValues={formConfig.fields.reduce(
        (accum, curr) => ({ ...accum, [curr.name]: "" }),
        {}
      )}
      onSubmit={(values) => {
        console.log(values);
        console.log("values");
      }}
      validationSchema={yupSchema}
    >
      {(props) => {
        return (
          <ChildFormView
            {...props}
            fieldsObj={makeFields(
              props.errors,
              props.touched,
              props.handleChange
            )}
          />
        );
      }}
    </Formik>
  );
}
export default ChildForm;
