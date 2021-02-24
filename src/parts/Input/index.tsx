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
}: InputInterface) {
  return (
    <Wrapper>
      <ErrorContainier error={touched ? error : ""}>
        <InputContainer icon={icon}>
          <StyledInput
            type={password ? "password" : "text"}
            name={name}
            placeholder={placeholder}
            error={error}
            touched={touched ? 1 : 0}
          />
        </InputContainer>
      </ErrorContainier>
    </Wrapper>
  );
}
