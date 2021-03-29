import React from "react";
import { Wrapper } from "./styled";
import Input from "parts/Input";

interface IFieldCustom {
  type: any;
  col?: number;
  fieldProps: {
    name: string;
    label?: string;
    placeholder?: string;
  };
}
function FieldCustom({ type, col, fieldProps }: IFieldCustom) {
  return (
    <Wrapper col={col || 6}>
      {type === "input" && <Input {...fieldProps} />}
    </Wrapper>
  );
}
export default FieldCustom;
