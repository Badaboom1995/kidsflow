import React from "react";
import ErrorContainier from "../ErrorContainier";
import { StyledInput, Wrapper, InputContainer, Prompt } from "./styled";
import { Label } from "../styled";
import { Field } from "formik";

interface ISearch {
  placeholder?: string;
  error?: string;
  icon?: string;
  name: string;
  password?: boolean;
  touched?: boolean;
  label?: string;
  centered?: boolean;
  value?: string;
  onChange: (value: string) => void;
  prompts: { id: string; value: string }[];
}

export default function Search({
  placeholder,
  error,
  icon,
  name,
  touched,
  label,
  centered,
  onChange,
  prompts,
}: ISearch) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <ErrorContainier error={touched ? error : ""}>
        <InputContainer icon={icon} centered={centered}>
          <Field name={name}>
            {({ field }) => (
              <StyledInput
                type={"text"}
                name={name}
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  onChange(e.target.value);
                }}
                placeholder={placeholder || "-- -- -- -- --"}
                centered={centered}
              />
            )}
          </Field>
        </InputContainer>
        {!!prompts.length && (
          <Prompt>
            {prompts.map((item) => (
              <p>{item}</p>
            ))}
          </Prompt>
        )}
      </ErrorContainier>
    </Wrapper>
  );
}
