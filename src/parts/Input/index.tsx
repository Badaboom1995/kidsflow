import React from "react";
import ErrorContainier from "../ErrorContainier";
import { StyledInput, Wrapper, InputContainer } from "./styled";
import { InputInterface } from "./types";

export default function Input({
  placeholder,
  error,
  icon,
  name,
  password,
  touched,
  multiline,
  onChange,
}: InputInterface) {
  const chooseType = () => {
    if (password) return "password";
    return "text";
  };
  return (
    <Wrapper>
      <ErrorContainier error={touched ? error : ""}>
        <InputContainer icon={icon}>
          {/* TODO. types for field's as */}
          {/* @ts-expect-error */}
          <StyledInput
            as={multiline ? "textarea" : "input"}
            type={chooseType()}
            name={name}
            placeholder={placeholder}
            error={error}
            touched={touched ? 1 : 0}
            rows={multiline}
            onChange={onChange}
          />
        </InputContainer>
      </ErrorContainier>
    </Wrapper>
  );
}
