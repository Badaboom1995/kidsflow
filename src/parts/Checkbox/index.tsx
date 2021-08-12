import React from "react";
import ErrorContainier from "../ErrorContainier";
import { Wrapper, Title, HiddenCheckbox } from "./styled";
import { CheckboxInterface } from "./types";

function Checkbox({
  error,
  name,
  children,
  setTouched,
  touched,
  onClick,
}: CheckboxInterface) {
  const setCheckboxTouched = () => {
    setTouched({ ...touched, [name]: true });
  };
  return (
    <ErrorContainier error={touched[name] ? error : ""}>
      <Wrapper>
        <HiddenCheckbox id={name} type="checkbox" name={name} />
        <Title
          onClick={() => {
            onClick();
            setCheckboxTouched();
          }}
          htmlFor={name}
        >
          {children}
        </Title>
      </Wrapper>
    </ErrorContainier>
  );
}
export default Checkbox;
