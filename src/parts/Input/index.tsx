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
  label?: string | React.ReactNode;
  type?: string;
  centered?: boolean;
  value?: string;
  getPrompt?: (value: string) => string;
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
      {label && <Label>{label}</Label>}
      <ErrorContainier error={touched ? error : ""}>
        {type === "textarea" ? (
          <InputContainer icon={icon} centered={centered}>
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
          </InputContainer>
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
