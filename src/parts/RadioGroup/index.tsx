import React from "react";
import ErrorContainier from "../ErrorContainier";
import { Wrapper, Label, Title, Radio } from "./styled";
import { RadioGroupInterface } from "./types";

function RadioGroup({
  error,
  options,
  groupName,
  touched,
}: RadioGroupInterface) {
  return (
    <ErrorContainier error={touched ? error : ""}>
      <Wrapper>
        {options.map((item) => (
          <Label key={item.value}>
            <Radio type="radio" name={groupName} value={item.value} />
            <Title>{item.name}</Title>
          </Label>
        ))}
      </Wrapper>
    </ErrorContainier>
  );
}
export default RadioGroup;
