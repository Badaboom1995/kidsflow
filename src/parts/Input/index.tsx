import React from "react";
import ErrorContainier from "../ErrorContainier";
import { StyledInput, Wrapper, InputContainer, Textarea } from "./styled";
import { Label } from "../styled";
import { Field } from "formik";

interface IInput {
  placeholder?: string;
  error?: string;
  icon?: string;
  name: string;
  password?: boolean;
  touched?: boolean;
  label?: string;
  type?: string;
  centered?: boolean;
  value?: string;
}
export default function Input({
  placeholder,
  error,
  icon,
  name,
  touched,
  label,
  type,
  centered,
}: IInput) {
  return (
    <Wrapper>
      <ErrorContainier error={touched ? error : ""}>
        {label && <Label>{label}</Label>}
        {type === "textarea" ? (
          <Field name={name}>
            {({ field }) => (
              <Textarea
                name={name}
                value={field.value}
                onChange={field.onChange}
                rows={6}
              />
            )}
          </Field>
        ) : (
          <InputContainer icon={icon} centered={centered}>
            <StyledInput
              type={type || "text"}
              name={name}
              placeholder={placeholder || "-- -- -- -- --"}
              error={error}
              touched={touched ? 1 : 0}
              centered={centered}
            />
          </InputContainer>
        )}
      </ErrorContainier>
    </Wrapper>
  );
}
