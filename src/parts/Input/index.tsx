import React from "react";
import ErrorContainier from "../ErrorContainier";
import { StyledInput, Wrapper, InputContainer } from "./styled";
import { Label } from "../styled";

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
        <Label>{label}</Label>
        <InputContainer icon={icon} centered={centered}>
          <StyledInput
            type={type || "text"}
            name={name}
            placeholder={placeholder || "-- -- -- -- --"}
            error={error}
            touched={touched ? 1 : 0}
            centered
          />
        </InputContainer>
      </ErrorContainier>
    </Wrapper>
  );
}
