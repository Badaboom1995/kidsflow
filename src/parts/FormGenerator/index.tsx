import React, { useRef, useEffect } from "react";
import ChildFormView from "./view";
import { Formik } from "formik";
import * as Yup from "yup";
import { Item } from "features/AddUserForm/styled";
import Input from "parts/Input";
import Select from "parts/Select";
import { formConfigType } from "./types";

interface IFormGenerator {
  config: formConfigType;
  transparent?: boolean;
  // TODO. How to make type for dynamic object?
  initialValues?: any;
  setRef?: (ref: any) => void;
  onSubmit?: (values: any) => void;
}
/**
 * Form generator makes form depends on config
 * @param config main configuration
 * @param config.settings default settings.
 * @param fields fields list with configurations
 * @param fields.name REQUIRED. Inner name for the field
 * @param fields.options REQUIRED FOR SELECT TYPE. list of select options {name,value}
 * @param fields.type OPTIONAL. Type of field
 * @param fields.label OPTIONAL. Showed label
 * @param fields.title OPTIONAL, SELECT ONLY. Placeholder when nothing selected
 * @param fields.icon OPTIONAL. Icon url
 * @param fields.col OPTIONAL. Grid setting for field. (1 - 12)
 * @param fields.yup  OPTIONAL. settings for yup validation. Required on default, write: {key: optional, args[]} for not required field  Example, write: [{key: email, args['Not Email']}] for Yup.string().email('Not Email').
 */
function FormGenerator({
  config,
  onSubmit,
  setRef,
  transparent,
  initialValues,
}: IFormGenerator) {
  const formRef = useRef();
  useEffect(() => {
    if (formRef && setRef) {
      setRef(formRef);
    }
  }, [formRef]);
  const makeYup = (yup) => {
    if (!yup) return Yup.string().required("Обязательное поле");
    const startYup =
      yup[0].key === "optional"
        ? Yup.string()
        : Yup.string().required("Обязательное поле");
    return yup.reduce((accum, item) => accum[item.key](...item.args), startYup);
  };

  const makeYupSchema = (fields: any[]) =>
    fields.reduce(
      (accum, field) => ({
        ...accum,
        [field.name]: makeYup(field.yup),
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
    if (type === "text" || type === "textarea") {
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
      <Item col={props.col || config.settings.defaultCol} key={props.name}>
        {field}
      </Item>
    );
  };

  const makeFields = (errors, touched, handleChange) =>
    config.fields.reduce(
      (accum, curr) => ({
        ...accum,
        [curr.name]: chooseFieldByType(
          curr.type || config.settings.defaultType,
          handleChange,
          curr,
          errors,
          touched
        ),
      }),
      {}
    );

  const yupSchema = Yup.object(makeYupSchema(config.fields));

  return (
    <Formik
      initialValues={
        initialValues ||
        config.fields.reduce(
          (accum, curr) => ({ ...accum, [curr.name]: curr.value || "" }),
          {}
        )
      }
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validationSchema={yupSchema}
      innerRef={formRef}
    >
      {(props) => {
        return (
          <ChildFormView
            {...props}
            title={config.title}
            transparent={transparent}
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
export default FormGenerator;